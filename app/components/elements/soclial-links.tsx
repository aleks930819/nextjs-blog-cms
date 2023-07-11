import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

import Link from 'next/link';

const SocialLink = ({ platform, link }: { platform: string; link: string }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size="18" />;
      case 'instagram':
        return <Instagram size="18" />;
      case 'twitter':
        return <Twitter size="18" />;
      case 'github':
        return <Github size="18" />;
      default:
        return null;
    }
  };

  return <Link href={link}>{getIcon(platform)}</Link>;
};

export default SocialLink;
