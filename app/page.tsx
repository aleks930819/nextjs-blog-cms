import Link from 'next/link';
import PaddingContainer from './components/layout/padding-container';
import PostCard from './components/post/post-card';

import { DUMMY_POSTS } from '@/DUMMY_DATA';
import PostList from './components/post/post-lists';

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((_, index) => index > 0 && index < 3)}
        />
        <PostCard  reverse post={DUMMY_POSTS[3]} />
        <PostList
          posts={DUMMY_POSTS.filter((_, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
