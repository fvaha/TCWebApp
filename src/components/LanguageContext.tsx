import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

import { locales, languages } from "../locales";

type Translation = (typeof locales)["en"];

type LangContextType = {
  lang: string;
  setLang: (l: string) => void;
  t: Translation;
  languages: typeof languages;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function useLang(): LangContextType {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") ?? "en");

  useEffect(() => localStorage.setItem("lang", lang), [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: locales[lang] ?? locales.en,
      languages,
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
