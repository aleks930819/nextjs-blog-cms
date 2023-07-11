interface ISocialLinks {
  twitter: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  github: string;
}

interface ISiteConfig {
  siteName: string;
  desciprtion: string;
  currentlyAt: string;
  socialLinks: ISocialLinks;
}

const siteConfig: ISiteConfig = {
  siteName: 'Explorer',
  desciprtion: 'A simple explorer for the blockchain',
  currentlyAt: 'France',
  socialLinks: {
    github: 'https://github.com',
    twitter: 'https://twitter.com/',
    youtube: 'https://www.youtube.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

export default siteConfig;
