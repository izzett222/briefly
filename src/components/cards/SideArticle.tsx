import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
interface SideArticleProps {
  article: Article | number;
  sourceId?: string | undefined;
}

export default function SideArticle({ article, sourceId }: SideArticleProps) {
  return typeof article === "number" ? (
    <div >
      <Skeleton className="w-full h-[120px] mb-2" />
      <Skeleton className="w-full h-[43px] mb-2" />
      <Skeleton className="w-full h-[20px]" />
    </div>
  ) : (
    <Link
      to={`/article?url=${encodeURI(article.url)}${
        sourceId ? `&source=${sourceId}` : ""
      }`}
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
}
