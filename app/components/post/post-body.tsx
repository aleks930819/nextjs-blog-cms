import parse from "html-react-parser";
import Image from "next/image";
import { Element } from "html-react-parser";

const PostBody = ({ body }: { body: string }) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;
          return <Image src={src} alt={alt} width={500} height={500} />;
        }
      }
    },
  };
  const getParsedHtml = (body: string) => {
    return parse(body);
  };

  return <div className="rich-text">{getParsedHtml(body)}</div>;
};

export default PostBody;
