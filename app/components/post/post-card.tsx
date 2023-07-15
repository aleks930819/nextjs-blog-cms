import { Post } from "@/types/collection";
import Image from "next/image";

import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
  post: Post;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
}

const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) => {
  return (
    <Link
      href={`/post/${post?.slug}`}
      className={`@container ${
        layout === "horizontal"
          ? "grid items-center grid-cols-1  md:grid-cols-2 gap-10"
          : "grid grid-cols-1 gap-10"
      }`}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL as string}${post?.image}`}
        alt={post?.title}
        width={700}
        height={400}
        className={`rounded-md w-full object-cover object-center max-h-[300px] ${
          reverse ? "md:order-last" : ""
        }`}
      />
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
