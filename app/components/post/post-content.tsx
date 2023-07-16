import getDictionary from "@/lib/getDictonary";
import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
  locale: string;
}

const PostContent = async ({
  post,
  isPostPage = false,
  locale,
}: PostContentProps) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="space-y-2">
      <div className="@md:text-sm  text-xs items-center gap-2 flex">
        <div
          className={`font-medium ${
            post?.category?.title === "Cities"
              ? "text-emerald-500"
              : "text-rose-500"
          }`}
        >
          {post?.category?.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div>
          {post?.author?.first_name} {post?.author?.last_name}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div>{getReadingTime(post?.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div>{getRelativeDate(post?.date_created)}</div>
      </div>
      <h2 className="font-medium @lg:text-2xl  text-xl @md:text-2xl">
        {post?.title}
      </h2>
      <p className=" text-base @lg:text-lg text-neutral-600">
        {post?.description.substring(0, 200)}...
      </p>
      <div>
        {!isPostPage && (
          <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500 hover:text-rose-600 cursor-pointer">
            {dictionary.buttons.readmore}{" "}
            <ArrowRight className="inline-block" size={16} />
          </span>
        )}
      </div>
    </div>
  );
};

export default PostContent;
