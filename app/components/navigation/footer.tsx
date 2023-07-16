import React, { FC } from "react";

import siteConfig from "@/config/site";

import PaddingContainer from "../layout/padding-container";
import SocialLink from "../elements/soclial-links";
import getDictionary from "@/lib/getDictonary";

interface FooterProps {
  locale: string;
}

const Footer: FC<FooterProps> = async ({ locale }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="py-6 border-t mt-10">
      <PaddingContainer>
        <div>
          <h3 className="text-3xl font-bold">{siteConfig.siteName}</h3>
          <p className="max-w-md mt-2 text-lg text-neutral-500">
          </p>
        </div>
        <div className="mt-6 flex justify-between gap-4 ">
          <div>
            <div className="font-medium">#exploretheworld</div>
            <div className="flex items-center gap-3 text-emerald-500">
              <SocialLink
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
            </div>
            <div>
              <div className="text-sm text-netural-400">Currently At</div>
              <div className="bg-white shadow-md rounded-md  flex items-center gap-2">
                <div className="bg-emerald-200 rounded-full w-2 h-2" />
                {dictionary.footer.currentlyAtText}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-3 flex items-center gap-4">
          <div className="text-sm text-neutral-400">
            {dictionary.footer.rightsText}
          </div>
          <div>{dictionary.footer.creatorText} @alex</div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
