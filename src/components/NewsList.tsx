import AritcleCarousel from "./ArticleCarousel";
import Skeleton from "react-loading-skeleton";
import SideArticle from "./cards/SideArticle";
import HorizontalArticle from "./cards/HorizontalArticle";

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
            {articles?.slice(8, 12).map((article) => (
              <HorizontalArticle
                key={typeof article === "number" ? article : article.url}
                article={article}
                sourceId={sourceId}
              />
            ))}
          </div>
          <div className="mt-10 flex lg:hidden flex-col gap-4">
            {articles?.slice(5).map((article) => (
              <HorizontalArticle
                key={typeof article === "number" ? article : article.url}
                article={article}
                sourceId={sourceId}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 hidden max-w-[300px] lg:flex flex-col gap-6">
          {articles?.slice(5, 8).map((article) => (
            <SideArticle
              key={typeof article === "number" ? article : article.url}
              article={article}
              sourceId={sourceId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
