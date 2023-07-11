import { Post } from '@/types/collection';
import { ArrowRight } from 'lucide-react';

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      <div className="text-sm items-center gap-2 flex">
        <div
          className={`font-medium ${
            post.category.title === 'Cities'
              ? 'text-emerald-500'
              : 'text-rose-500'
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div>
          {post.author.first_name} {post.author.last_name}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div>1 min read</div>
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div>1 month ago</div>
      </div>
      <h2 className="font-medium text-2xl ">{post.title}</h2>
      <p className="text-neutral-600">
        {post.description.substring(0, 200)}...
      </p>
      <div>
        Read More <ArrowRight className="inline-block" size={16} />
      </div>
    </div>
  );
};

export default PostContent;
