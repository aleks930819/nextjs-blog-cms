import { DUMMY_POSTS } from '@/DUMMY_DATA';
import PaddingContainer from '@/app/components/layout/padding-container';
import PostHero from '@/app/components/post/post-hero';
import { notFound } from 'next/navigation';
export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <PostHero post={post} />
    </PaddingContainer>
  );
};

export default PostPage;
