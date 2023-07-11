import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

import Link from 'next/link';

const SocialLink = ({
  platform,
  link,
  isShareUrl = false,
}: {
  platform: string;
  link: string;
  isShareUrl?: boolean;
}) => {
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

  return (
    <Link href={link}>
      <div
        className={`${
          isShareUrl
            ? 'py-2 px-3 bg-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-200 transition-colors duration-200'
            : ''
        }`}
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};

export default SocialLink;
