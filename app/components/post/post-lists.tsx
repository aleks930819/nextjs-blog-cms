import { Post } from '@/types/collection';
import PostCard from './post-card';

interface PostListProps {
  posts: Post[];
  layout?: 'horizontal' | 'vertical';
}

const PostList = ({ posts, layout = 'vertical' }: PostListProps) => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 gap-10'>
      {posts.map((post) => (
        <PostCard post={post} layout={layout} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
