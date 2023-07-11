import { DUMMY_POSTS } from '@/DUMMY_DATA';

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">{post?.title}</h1>
    </div>
  );
};

export default PostPage;
