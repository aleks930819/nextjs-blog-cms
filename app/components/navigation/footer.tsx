import React, { FC } from 'react';
import PaddingContainer from '../layout/padding-container';
import siteConfig from '@/config/site';
import SocialLink from '../elements/soclial-links';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="py-6 border-t mt-10">
      <PaddingContainer>
        <div>
          <h3 className="text-3xl font-bold">{siteConfig.siteName}</h3>
          <p className="max-w-md mt-2 text-lg text-neutral-500">
            {siteConfig.desciprtion}
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
                {siteConfig.currentlyAt}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-3 flex items-center gap-4">
          <div className="text-sm text-neutral-400">
            All rights are reserver | Copyright 2023
          </div>
          <div>Made with love by @alex</div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
