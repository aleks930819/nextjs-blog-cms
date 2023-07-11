import { DUMMY_POSTS } from '@/DUMMY_DATA';
import CTACard from '@/app/components/elements/cta-card';
import SocialLink from '@/app/components/elements/soclial-links';
import PaddingContainer from '@/app/components/layout/padding-container';
import PostBody from '@/app/components/post/post-body';
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
      <div className="mt-10 mb-10 flex gap-10  relative flex-col sm:flex-row">
        <div className="relative">
          <div className="sticky top-28 flex flex-col gap-4">
            <SocialLink
              platform="facebook"
              link={'facebook.com'}
              isShareUrl={true}
            />
            <SocialLink
              platform="twitter"
              link={'twitter.com'}
              isShareUrl={true}
            />
            <SocialLink
              platform="instagram"
              link={'instagram.com'}
              isShareUrl={true}
            />
          </div>
        </div>
        <PostBody body={post.body} />
      </div>
      <CTACard />
    </PaddingContainer>
  );
};

export default PostPage;
