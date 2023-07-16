/* eslint-disable no-undef */
import "./globals.css";

import { Inter } from "next/font/google";

import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/navigation/footer";
import getDictionary from "@/lib/getDictonary";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Explorer",
//   description: "Explore the world with me",
// };

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const dictionary = await getDictionary(lang);
  return {
    title: "Explorer",
    description: dictionary.footer.description,
    openGraph: {
      title: "Explorer",
      description: dictionary.footer.description,
      type: "website",
      locale: lang,
      siteName: "Explorer",
    },
  };
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navigation locale={lang} />
        <div className="pt-10 min-h-[calc(100vh - 300px)]">{children}</div>
        <Footer locale={lang} />
      </body>
    </html>
  );
}
