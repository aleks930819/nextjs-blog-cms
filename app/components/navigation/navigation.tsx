import Link from 'next/link';
import { FC } from 'react';
import PaddingContainer from '../layout/padding-container';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <div className='sticky top-0 left-0 right-0 border-b z-[20] bg-opacity-50 backdrop-blur-md'>
      <PaddingContainer>
        <div className="py-6 flex items-center justify-between ">
          <Link href="/" className="text-lg font-bold">
            Explore
          </Link>
          {/* Category Links */}
          <nav>
            <ul className="flex items-center gap-4 text-neutral-500">
              <li>
                <Link href="/cities">Cities</Link>
              </li>
              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
