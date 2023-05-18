import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

interface HorizontalArticleProps {
  article: Article | number;
  sourceId?: string | undefined;
}

export default function HorizontalArticle({
  article,
  sourceId,
}: HorizontalArticleProps) {
  return typeof article === "number" ? (
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
  ) : (
    <Link
      to={`/article?url=${encodeURI(article.url)}${
        sourceId ? `&source=${sourceId}` : ""
      }`}
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
        <p className="text-[#4C4E4D] text-sm mt-2 hidden">{article.description}</p>
        <p className="text-[#454541] text-xs lg:text-sm  ">
          {article.description?.slice(0, 90) + "..."}
        </p>
      </div>
    </Link>
  );
}
