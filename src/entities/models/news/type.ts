export type Article = {
  gid: string;
  title: string;
  url: string;
  is_external_url: true;
  author: string;
  contents: string;
  feedlabel: string;
  date: number;
  feedname: string;
  feed_type: number;
  appid: number;
};

export type News = {
  appnews: {
    appid: number;
    newsitems: Article[];
  };
};
