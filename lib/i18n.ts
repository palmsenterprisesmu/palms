export type Lang = 'en' | 'fr' | 'de'

export function t<T extends Record<Lang, string>>(obj: T, lang: Lang): string {
  return obj[lang] ?? obj.en
}