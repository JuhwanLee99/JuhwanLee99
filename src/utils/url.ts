export function formatLink(url?: string) {
  if (!url) return null;

  const withProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;
  try {
    const parsed = new URL(withProtocol);
    return parsed.href;
  } catch {
    return null;
  }
}

export function getHostname(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}
