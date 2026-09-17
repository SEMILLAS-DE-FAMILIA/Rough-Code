export function cleanImageUrl(rawUrl: string | null | undefined): string {
  if (!rawUrl) return '/images/slider/image1.png';
  if (typeof rawUrl === 'string' && rawUrl.startsWith('[')) {
    try {
      const parsed = JSON.parse(rawUrl);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed[0];
      }
    } catch {
      // Si falla el parseo, se utiliza el valor original
    }
  }
  return rawUrl;
}