//TODO: quand même modifier pour la version midleware un de ces 4
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // Enlève le slash final de base
  const cleanPath = path.startsWith('/') ? path : `/${path}`; // Assure que path commence par /
  return base + cleanPath;
}