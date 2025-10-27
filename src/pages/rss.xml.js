import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Maxime Jeannin | Blog',
    description: 'Apprentissage du dev',
    site: "https://makusu-dev.github.io/astro-page/",
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr-fr</language>`,
  });
}