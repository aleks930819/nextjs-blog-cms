import { notFound } from "next/navigation";

import { Post } from "@/types/collection";

import PaddingContainer from "@/app/components/layout/padding-container";
import PostList from "@/app/components/post/post-lists";
import directus from "@/lib/directus";

export const generateStaticParams = async () => {
  try {
    const categories = await directus.items("category").readByQuery({
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: ["slug"],
    });

    const params = categories?.data?.map((category) => {
      return {
        category: category.slug as string,
      };
    });

    return params || [];
  } catch (err) {}
};

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const getCategoryData = async () => {
    try {
      const category = await directus.items("category").readByQuery({
        filter: {
          slug: {
            _eq: params.category,
          },
        },
        fields: [
          "*",
          "posts.*",
          "posts.author.fist_name",
          "posts.author.last_name",
          "posts.category.*",
        ],
      });
      return category?.data?.[0];
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  const category = await getCategoryData();

  if (!category) {
    return notFound();
  }

  const typeCorrectedCategory = category as unknown as {
    id: string;
    title: string;
    slug: string;
    description: string;
    posts: Post[];
  };

  return (
    <PaddingContainer>
      <PostList posts={typeCorrectedCategory.posts} />
    </PaddingContainer>
  );
};

export default CategoryPage;
