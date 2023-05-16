import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useGetFeaturedQuery } from "../features/api/apiSlice";

export default function Article() {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const { data: articles } = useGetFeaturedQuery(undefined);
  const article = articles?.find((article) => article.id === articleId);

  const regex = /\[.*\]$/g;
  if (!article) {
    return (
      <div className="px-5">
        <div className="max-w-[800px] border border-[#d1d1d1] h-[400px] mx-auto border-t-[10px] border-t-[#4f7177] p-8">
          <h1 className="text-[90px] font-extrabold text-[#4C4E4D] leading-[1]">
            Briefly
          </h1>
          <h2 className="text-[#4C4E4D] font-medium text-[37px] mt-5 mb-2.5">404 Not found</h2>
          <p className="text-[27px] text-[#4C4E4D] leading-[1.3]">This page couldn't be found! Visit the <Link to="/" className="underline">Briefly homepage</Link>  if you like.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-8 pb-8 text-[#4C4E4D]">
      <BackButton
        handleClick={() => {
          navigate("..");
        }}
      />
      <h1 className="font-medium text-[54px] leading-[1.1] mt-9 mb-3">
        {article?.title}
      </h1>
      <p>
        <span className="font-medium">By </span>
        {article?.author} | {article?.publishedAt?.slice(0, 10)}
      </p>
      <div className="my-8 gap-5 w-[70%]">
        <p className="w-full">{article?.content?.replace(regex, "")}</p>
        <Link
          target="_blank"
          className="bg-[#FFF200] font-bold text-xl px-4 py-2.5 mt-8 mb-4 inline-block"
          to={article?.url}
        >
          Read more
        </Link>
      </div>

      <div>
        <img
          src={article?.urlToImage}
          className="w-[80%] aspect-[4/2] object-cover"
          alt="article"
        />
      </div>
    </div>
  );
}
