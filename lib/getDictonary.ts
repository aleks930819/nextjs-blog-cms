const dictionaries = {
  en: () => import("@/dictinoaries/en.json").then((m) => m.default),
  de: () => import("@/dictinoaries/de.json").then((m) => m.default),
};

const getDictionary = async (locale: string) => {
  if (!locale || !dictionaries[locale as "en" | "de"]) {
    return await dictionaries["en"]();
  } else {
    return await dictionaries[locale as "en" | "de"]();
  }
};

export default getDictionary;
