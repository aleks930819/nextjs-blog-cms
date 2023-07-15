import Link from "next/link";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

import PaddingContainer from "./components/layout/padding-container";
import PostCard from "./components/post/post-card";
import PostList from "./components/post/post-lists";
import CTACard from "./components/elements/cta-card";
import directus from "@/lib/directus";
import { NOTFOUND } from "dns";
import { notFound } from "next/navigation";

export default async function Home() {
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

  console.log(posts);

  if (!posts) {
    return notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList posts={posts?.filter((_, index) => index > 0 && index < 3)} />
        <CTACard />
        {posts[3] && <PostCard post={posts[3]} />}
        <PostList posts={posts?.filter((_, index) => index > 3 && index < 6)} />
      </main>
    </PaddingContainer>
  );
}
