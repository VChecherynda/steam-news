import { News } from "../../entities/models/news";
import { baseApi } from "../../shared/api/baseApi";
import { NEWS_TAG } from "../../shared/api/tags";
import { STEAM_WEB_API, STEAM_NEWS_PATH } from "../../shared/config";

interface NewsArguments {
  appId: number;
  count: number;
  maxLength: number;
  activePage: number;
}

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    news: build.query<News["appnews"]["newsitems"] | undefined, NewsArguments>({
      providesTags: [NEWS_TAG],
      query: ({ appId, activePage, count, maxLength }) => ({
        url: `http:/${STEAM_WEB_API}${STEAM_NEWS_PATH}?appid=${String(
          appId
        )}&count=${String(activePage + count)}&maxlength=${String(
          maxLength
        )}&format=json`,
      }),
      transformResponse: (data: News, _, arg: NewsArguments) => {
        const { count } = arg;

        console.log("[count]", count);

        return data.appnews.newsitems.slice(-count);
      },
    }),
  }),
});

export const { useQuery } = dashboardApi.endpoints.news;
