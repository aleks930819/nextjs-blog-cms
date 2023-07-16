"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LangSwitcher = ({ locale }: { locale: string }) => {
  const targetLanguage = locale === "en" ? "de" : "en";
  const pathName = usePathname();
  const redirectTarget = () => {
    if (!pathName) {
      return "/";
    }
    const segments = pathName.split("/");
    segments[1] = targetLanguage;
    return segments.join("/");
  };
  return (
    <Link href={redirectTarget()} locale={targetLanguage}
        className="text-lg font-bold 
        bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-2
        "
    >
      {targetLanguage.toUpperCase()}
    </Link>
  );
};

export default LangSwitcher;
