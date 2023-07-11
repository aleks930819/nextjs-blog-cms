interface PostCategory {
  id: string;
  title: string;
}

interface Author {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  category: PostCategory;
  author: Author;
  slug: string;
  image: string;
  body: string;
  date_created: string;
  date_updated: string;
}
[];

export interface Category {
  id: string;
  title: string;
  slug?: string;
  description?: string;
}
