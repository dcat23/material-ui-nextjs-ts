export function decodeUrl(text: string): string {
  return decodeURIComponent(text)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}