import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { type Schema, z } from "zod";

// 1 week
const DEFAULT_TTL = 7 * 24 * 60 * 60;
const Meta = z.object({
  writtenAt: z.number(),
});
type Meta = z.infer<typeof Meta>;
/**
  - this uses FS to cache. only use this for expensive things that need FS caching (such as fetching from the Internet)
  - this does not cache `null` or `undefined`.
  */
export async function cache<T>(
  key: string,
  Schema: Schema<T>,
  load: () => Promise<T>,
  /** ttl: time-to-live in seconds */
  options: {
    ttl?: number;
  } = {},
): Promise<T> {
  const ttl = options.ttl ?? DEFAULT_TTL;
  const now = new Date().getTime() / 1000;
  const path = await toPath(sanitizeKey(key));

  // cache load
  if (await exists(path)) {
    try {
      const file = JSON.parse(
        await fs.readFile(path, {
          encoding: "utf8",
        }),
      );
      const data = Schema.parse(file.data);
      const meta = Meta.parse(file.meta);
      // cache hit
      if (now - meta.writtenAt <= ttl) return data;
    } catch (err) {
      console.warn("failed to parse retrieved cache:", err);
    }
  }

  // cache miss
  const val = await load();

  const parse = Schema.safeParse(val);
  if (parse.success) {
    if (val != null) {
      // write cache
      const content = {
        data: val,
        meta: {
          writtenAt: now,
        } satisfies Meta,
      };
      await fs.writeFile(path, JSON.stringify(content));
    }
  } else {
    // skip lcache
    console.warn(
      "[warning] failed to validate freshly fetched value, skipping caching. error:",
      parse.error,
    );
  }
  return val;
}

async function toPath(scacheKey: string): Promise<string> {
  const basePath = `${await getBasedir()}/.astro/x-cache`;
  if (!(await exists(basePath))) {
    await fs.mkdir(basePath);
  }
  return `${basePath}/${scacheKey}`;
}

async function exists(path: string) {
  try {
    await fs.stat(path);
    return true;
  } catch (err) {
    return false;
  }
}
function sanitizeKey(k: string): string {
  return k.replaceAll("/", "");
}
let baseDir: string | null = null;
async function getBasedir() {
  if (baseDir) return baseDir;
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const entries = __dirname.split("/");
  while (!(await exists(`${entries.join("/")}/.git`))) {
    entries.pop();
  }
  const retval = entries.join("/");
  baseDir = retval;
  return retval;
}
