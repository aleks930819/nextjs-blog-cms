import { Post } from '@/types/collection';
import PostContent from './post-content';
import Image from 'next/image';

interface PostHeroProps {
  post: Post;
}

const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage={true} post={post} />
      <Image
        src={post.image}
        alt={post.title}
        width={1280}
        height={400}
        className="rounded-md mt-6 w-full object-cover object-center h-[300px] sm:h-[500px] max-h-[500px]"
      />
    </div>
  );
};

export default PostHero;
