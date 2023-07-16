import { notFound } from "next/navigation";

import CTACard from "@/app/components/elements/cta-card";
import SocialLink from "@/app/components/elements/soclial-links";
import PaddingContainer from "@/app/components/layout/padding-container";
import PostBody from "@/app/components/post/post-body";
import PostHero from "@/app/components/post/post-hero";
import directus from "@/lib/directus";

import { cache } from "react";
import getDictionary from "@/lib/getDictonary";
import siteConfig from "@/config/site";

const getPostData = cache(async (postSlug: string, locale: string) => {
  try {
    const post = await directus.items("post").readByQuery({
      filter: {
        slug: {
          _eq: postSlug,
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
});

export const generateMetaData = async ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) => {
  const post = await getPostData(slug, lang);
  const dictionary = await getDictionary(lang);
  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: "Explorer",
      description: dictionary.footer.description,
      type: "website",
      locale: lang,
      siteName: "Explorer",
    },
  };
};

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
  const postSlug = params.slug;
  const post = await getPostData(postSlug, params.lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`,
    author: post.author.first_name + " " + post.author.last_name,
    genre: post.category.title,
    publisher: siteConfig.siteName,
    datePublished: new Date(post.date_created).toISOString(),
    dateCreated: new Date(post.date_created).toISOString(),
    dateModified: new Date(post.date_updated).toISOString(),
    description: post.description,
    articleBody: post.body,
  };

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
