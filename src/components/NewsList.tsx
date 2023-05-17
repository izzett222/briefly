import { Link } from "react-router-dom";
import AritcleCarousel from "./ArticleCarousel";
import Skeleton from "react-loading-skeleton";

type Props = {
  title: string | undefined;
  news: Article[] | undefined;
  isLoading: boolean;
  to: string;
  sourceId?: string | undefined;
};
export default function NewsList({
  title,
  news,
  isLoading,
  to,
  sourceId,
}: Props) {
  const articles = isLoading ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] : news;
  return (
    <div>
      {!title && isLoading ? (
        <div className="w-36">
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <h2 className="text-[30px] tracking-[-2px] after:block after:bg-[#C1BB25] after:h-2.5 after:w-[72px] relative after:absolute after:bottom-2 font-extrabold mb-2">
          <span className="relative z-10 text-[#454541]">{title}</span>{" "}
        </h2>
      )}

      <div className="w-full flex gap-9 h-full">
        <div className="flex-1 h-full">
          {isLoading ? (
            <Skeleton className="w-full h-[453px]" />
          ) : (
            <AritcleCarousel
              to={to}
              sourceId={sourceId}
              articles={news?.slice(0, 5) as Article[]}
            />
          )}

          <div className="mt-10 hidden  lg:flex flex-col gap-4">
            {articles?.slice(8, 12).map((article) => {
              if (typeof article === "number") {
                return (
                  <div className="flex gap-4 md:gap-[30px]" key={article}>
                    <Skeleton className="w-[200px] h-[120px]" />
                    <div className="flex-1">
                      <Skeleton className="w-full h-[36px] mb-3" />
                      <Skeleton className="w-full h-[24px]" />
                    </div>
                  </div>
                );
              }
              const url = `${to}?url=${encodeURI(article.url)}${
                sourceId ? `&source=${sourceId}` : ""
              }`;
              return (
                <Link
                  to={url}
                  state={{ isNotFirstLocation: true }}
                  className="flex group gap-4 md:gap-[30px]"
                  key={article.url}
                >
                  <div className="w-[200px] h-[120px] relative">
                    <img
                      src={article.urlToImage}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#4C4E4D] duration-100 group-hover:text-[#333333] text-lg mb-3">
                      {article.title}
                    </h4>
                    <p className="text-[#454541] text-sm">
                      {article.description?.slice(0, 90) + "..."}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 flex lg:hidden flex-col gap-4">
            {articles?.slice(5).map((article) => {
              if (typeof article === "number") {
                return (
                  <div
                    key={article}
                    className="flex flex-col xs:flex-row gap-4 md:gap-[30px]"
                  >
                    <Skeleton className="w-full xs:min-w-[200px] h-[120px]" />
                    <div className="flex-1">
                      <Skeleton className="w-full h-[36px] mb-3" />
                      <Skeleton className="w-full h-[24px]" />
                    </div>
                  </div>
                );
              }
              const url = `${to}?url=${encodeURI(article.url)}${
                sourceId ? `&source=${sourceId}` : ""
              }`;
              return (
                <Link
                  to={url}
                  state={{ isNotFirstLocation: true }}
                  className="flex flex-col xs:flex-row gap-1 group xs:gap-4 md:gap-[30px]"
                  key={article.url}
                >
                  <div className="w-full xs:w-[200px] h-[120px] relative">
                    <img
                      src={article.urlToImage}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#4C4E4D] duration-100 group-hover:text-[#333333] text-base leading-[1.3] md:text-lg mb-1 md:mb-3">
                      {article.title}
                    </h4>
                    <p className="text-[#454541] text-xs lg:text-sm">
                      {article.description?.slice(0, 90) + "..."}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex-1 hidden max-w-[300px] lg:flex flex-col gap-6">
          {articles?.slice(5, 8).map((article) => {
            if (typeof article === "number") {
              return (
                <div key={article}>
                  <Skeleton className="w-full h-[120px] mb-2" />
                  <Skeleton className="w-full h-[43px] mb-2" />
                  <Skeleton className="w-full h-[20px]" />
                </div>
              );
            }

            const url = `${to}?url=${encodeURI(article.url)}${
              sourceId ? `&source=${sourceId}` : ""
            }`;

            return (
              <Link
                to={url}
                key={article.url}
                state={{ isFirstLocation: true }}
                className="w-full group"
              >
                <div className="w-full block h-[120px] relative">
                  <img
                    src={article.urlToImage}
                    className="h-full w-full absolute inset-0 object-cover"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-[24px] text-[#4C4E4D] duration-100 group-hover:text-[#333333] font-bold leading-[1.15]">
                    {article.title?.slice(0, 60) + "..."}
                  </h4>
                  <p className="text-[#454541] text-sm mt-3">
                    {article.description?.slice(0, 90) + "..."}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
