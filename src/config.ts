export const siteConfig = {
  name: 'Songhae Park',
  baseUrl: 'https://songhaepark.com',
  slug: 'songhae-park',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
