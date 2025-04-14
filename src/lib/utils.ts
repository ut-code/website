export function addOrigin(url: string, site: URL | undefined) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  if (url.startsWith("/")) {
    if (!site) throw new Error("site is undefined");
    return site.origin + url;
  }
  console.warn("WARNING: unknown URL schema:", url);
  return url;
}
