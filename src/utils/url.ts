export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Assure qu'il n'y a pas de double slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}