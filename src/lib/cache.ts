import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Schema } from "astro/zod";
/**
  - this uses FS to cache. only use this for expensive things that need FS caching (such as fetching from the Internet)
  - this does not cache `null` or `undefined`.
  */
export async function cache<T>(
  key: string,
  schema: Schema<T>,
  load: () => Promise<T>,
): Promise<T> {
  const path = await toPath(sanitizeKey(key));

  // cache load
  if (await exists(path)) {
    try {
      const file = await fs.readFile(path, {
        encoding: "utf8",
      });
      const val = schema.parse(JSON.parse(file));
      // cache hit
      return val;
    } catch (err) {
      console.warn("failed to parse retrieved cache:", err);
    }
  }

  // cache miss
  const val = await load();

  const parse = schema.safeParse(val);
  if (parse.success) {
    if (val != null) {
      // write cache
      await fs.writeFile(path, JSON.stringify(val));
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
