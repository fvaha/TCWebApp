import en from "./en";
import de from "./de";
import fr from "./fr";
import ar from "./ar";
import cr from "./cr";
import no from "./no";
import ru from "./ru";
import sp from "./sp";

import type { Translation } from "./types"; // type-only import ✅

export const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "cr", label: "Hrvatski" },
  { code: "no", label: "Norsk" },
  { code: "ru", label: "Русский" },
  { code: "sp", label: "Español" },
] as const;

export const locales: Record<string, Translation> = {
  en,
  de,
  fr,
  ar,
  cr,
  no,
  ru,
  sp,
};
