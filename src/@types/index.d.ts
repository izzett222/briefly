interface Article {
    source: { id: null | string; name: string };
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    id:string
  }
  interface Source {
      id: string;
      name: string;
      description:string;
      category: string;
      country: string;
      url: string;
  }
  interface TransformResponse {
      articles: Article[];
  }