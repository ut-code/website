import { load as cheerioLoad } from "cheerio";
import { z } from "zod";
import { cache } from "./cache";

function getDomain(url: string): string {
  return new URL(url).hostname;
}

/**
   @param siteBaseURL - it should only contain base url of the site
   
   TODO: what about GH Pages? do they work?
 */
export async function fetchFavicon(
  siteBaseURL: string,
): Promise<string | undefined> {
  const cacheKey = `fetch-favicon:${getDomain(siteBaseURL)}`;

  return await cache(cacheKey, z.string().optional(), async () => {
    const websiteRes = await fetch(siteBaseURL);
    if (!websiteRes.ok) {
      return undefined;
    }

    // fetch link[rel="icon"].href
    {
      const html = await websiteRes.text();
      const querySelector = cheerioLoad(html);
      const iconHref = querySelector(
        "link[rel='icon'], link[rel='shortcut icon']",
      )[0]?.attribs.href;
      if (iconHref) {
        const iconUrl = new URL(iconHref, siteBaseURL);
        const iconRes = await fetch(iconUrl);
        const contentType = iconRes.headers.get("content-type");
        if (!contentType)
          console.warn(
            `header "Content-Type" not found while fetching ${iconUrl.toString()}`,
          );
        if (iconRes.ok) {
          return base64DataURL(
            contentType,
            Buffer.from(await iconRes.arrayBuffer()),
          );
        }
      }
    }

    // fetch /favicon.ico
    {
      const faviconUrl = `${new URL(siteBaseURL).origin}/favicon.ico`;
      const faviconRes = await fetch(faviconUrl);
      const contentType = faviconRes.headers.get("content-type");
      if (!contentType)
        console.warn(
          `header "Content-Type" not found while fetching ${faviconUrl}`,
        );
      if (
        faviconRes.ok &&
        (contentType == null || !contentType.startsWith("text/"))
      ) {
        return base64DataURL(
          contentType,
          Buffer.from(await faviconRes.arrayBuffer()),
        );
      }
    }

    return undefined;
  });
}

function base64DataURL(contentType: string | null, buf: Buffer) {
  const dataType = contentType ? `${contentType};base64` : "base64";
  return `data:${dataType},${buf.toString("base64")}`;
}
