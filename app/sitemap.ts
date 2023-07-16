import directus from "@/lib/directus";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string;

  //Get posts
  const posts = await directus.items("post").readByQuery({
    fields: ["slug", "date_updated"],
  });

  const postLinks = posts?.data?.map((post) => {
    return [
      {
        url: `${baseURL}/en/${post.slug}`,
        lastModified: post.date_updated,
      },
      {
        url: `${baseURL}/de/${post.slug}`,
        lastModified: post.date_updated,
      },
      {
        url: `${baseURL}/${post.slug}`,
        lastModified: post.date_updated,
      },
    ];
  });
  //Get categories
  const categories = await directus.items("category").readByQuery({
    fields: ["slug", "date_updated"],
  });

  const categoryLinks = categories?.data?.map((category) => {
    return [
      {
        url: `${baseURL}/en/${category.slug}`,
        lastModified: category.date_updated,
      },
      {
        url: `${baseURL}/de/${category.slug}`,
        lastModified: category.date_updated,
      },
      {
        url: `${baseURL}/${category.slug}`,
        lastModified: category.date_updated,
      },
    ];
  });

  const dynamicLinks = postLinks?.concat(categoryLinks ?? []).flat() ?? [];

  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/en`,
    },
    {
      url: `${baseURL}/de`,
    },
    ...dynamicLinks,
  ];
}
