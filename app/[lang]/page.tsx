import { notFound } from "next/navigation";

import directus from "@/lib/directus";

import PaddingContainer from "@/app/components/layout/padding-container";
import PostCard from "@/app/components/post/post-card";
import PostList from "@/app/components/post/post-lists";
import CTACard from "@/app/components/elements/cta-card";

export default async function Home({ params }: { params: { lang: string } }) {
   const getAllPosts = async () => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      });

      return posts.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const posts = await getAllPosts();

  if (!posts) {
    return notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} locale={params.lang} />
        <PostList
          locale={params.lang}
          posts={posts?.filter((_, index) => index > 0 && index < 3)}
        />
        <CTACard locale={params.lang} />
        {posts[3] && <PostCard locale={params.lang} post={posts[3]} />}
        locale={params.lang}
        <PostList
          locale={params.lang}
          posts={posts?.filter((_, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
