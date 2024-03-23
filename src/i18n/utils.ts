import { ui, defaultLang } from './ui';

type UIKeys = "objetivosLogrados"|"responsibilities" |"sobreMiTitle"|"experienciaTitle"|"educacionTitle"|"habilidadesTitle"| "proyectosTitle" |"expirienceTimeNow" |"titles"| "basics" | "work" | "volunteer" | "education" | "awards" | "certificates" | "publications" | "skills" | "languages" | "interests" | "references" | "projects";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as Record<UIKeys, any>)[key] || (ui[defaultLang] as Record<UIKeys, any>)[key];
  }
}