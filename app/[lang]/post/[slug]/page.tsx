import { notFound } from "next/navigation";

import CTACard from "@/app/components/elements/cta-card";
import SocialLink from "@/app/components/elements/soclial-links";
import PaddingContainer from "@/app/components/layout/padding-container";
import PostBody from "@/app/components/post/post-body";
import PostHero from "@/app/components/post/post-hero";
import directus from "@/lib/directus";

export const generateStaticParams = async () => {
  try {
    const posts = await directus.items("post").readByQuery({
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: ["slug"],
    });
    const params = posts?.data?.map((post) => {
      return {
        slug: post.slug as string,
      };
    });

    return params || [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const PostPage = async ({
  params,
}: {
  params: { slug: string; lang: string };
}) => {
  const getPostData = async () => {
    try {
      const post = await directus.items("post").readByQuery({
        filter: {
          slug: {
            _eq: params.slug,
          },
        },
        fields: [
          "*",
          "category.id",
          "category.title",
          "author.id",
          "author.first_name",
          "author.last_name",
        ],
      });
      return post?.data?.[0];
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const post = await getPostData();

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <PostHero post={post} locale={params.lang} />
      <div className="mt-10 mb-10 flex gap-10  relative flex-col sm:flex-row">
        <div className="relative">
          <div className="sticky top-28 flex flex-col gap-4">
            <SocialLink
              platform="facebook"
              link={"facebook.com"}
              isShareUrl={true}
            />
            <SocialLink
              platform="twitter"
              link={"twitter.com"}
              isShareUrl={true}
            />
            <SocialLink
              platform="instagram"
              link={"instagram.com"}
              isShareUrl={true}
            />
          </div>
        </div>
        <PostBody body={post.body} />
      </div>
      <CTACard locale={params.lang} />
    </PaddingContainer>
  );
};

export default PostPage;
