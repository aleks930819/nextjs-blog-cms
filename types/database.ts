interface Post {
  id: string;
  title: string;
  description: string;
  category: {
    id: string;
    title: string;
  };
  author: {
    id: string;
    first_name: string;
    last_name: string;
  };
  slug: string;
  image: string;
  body: string;
  date_created: string;
  date_updated: string;
}
[];



