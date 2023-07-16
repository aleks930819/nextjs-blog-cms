import Link from "next/link";
import { FC } from "react";
import PaddingContainer from "../layout/padding-container";
import getDictionary from "@/lib/getDictonary";

interface NavigationProps {
  locale: string;
}

const Navigation: FC<NavigationProps> = async ({ locale }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="sticky top-0 left-0 right-0 border-b z-[20] bg-opacity-50 backdrop-blur-md">
      <PaddingContainer>
        <div className="py-6 flex items-center justify-between ">
          <Link href="/" className="text-lg font-bold">
            Explore
          </Link>
          {/* Category Links */}
          <nav>
            <ul className="flex items-center gap-4 text-neutral-500">
              <li>
                <Link href={`/${locale}/cities`}>
                  {dictionary.navigation.links.cities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences`}>
                  {dictionary.navigation.links.experiences}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
