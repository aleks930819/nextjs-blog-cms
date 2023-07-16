import { Post } from "@/types/collection";
import PostContent from "./post-content";
import Image from "next/image";
import SocialLink from "../elements/soclial-links";
import PostBody from "./post-body";

interface PostHeroProps {
  post: Post;
  locale: string;
}

const PostHero = ({ post, locale }: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage={true} post={post} locale={locale} />
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL as string}${post?.image}`}
        alt={post?.title}
        width={1280}
        height={400}
        className="rounded-md mt-6 w-full object-cover object-center h-[300px] sm:h-[500px] max-h-[500px]"
      />
    </div>
  );
};

export default PostHero;
