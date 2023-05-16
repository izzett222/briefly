import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import { useState } from "react";
import { motion } from "framer-motion";
interface ArticleCarouselProps {
  articles: Article[];
  to: string;
}
export default function ArticleCarousel({ articles, to }: ArticleCarouselProps) {
  const [index, setIndex] = useState<number>(0);
  const goPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const goNext = () => {
    if (index < articles.length - 1) {
      setIndex(index + 1);
    }
  };
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden flex relative">
        <button
          className={`bg-white absolute sm:hidden top-[40%] left-2 z-10 p-3 rounded-full ${
            index < 1 && "bg-opacity-50"
          }`}
          onClick={goPrev}
        >
          <img src={arrow} className="rotate-180" alt="" />
        </button>
        <button
          className={`bg-white sm:hidden p-3 absolute top-[40%] right-2 z-10 rounded-full ${
            index === articles.length - 1 && "bg-opacity-50"
          }`}
          onClick={goNext}
        >
          <img src={arrow} alt="" />
        </button>
        {articles.map((article) => (
          <motion.div
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            key={article.id}
            className="min-w-full w-full h-[453px] relative"
          >
            <img
              src={article.urlToImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Link
              to={`${to}/${article.id}`}
              className="block absolute bottom-0 -left-[1px] z-10 bg-white pr-[18px] w-full border-b border-r border-l border-[#454541] border-opacity-10 sm:w-[332px] h-[178px] pl-[18px]"
            >
              <p className="mt-4 mb-2.5">
                {article.source.name} - {article.publishedAt.slice(0, 10)}
              </p>
              <p className="text-[30px] font-semibold leading-[1.1]">
                {article.title.slice(0, 50) + "..."}
              </p>
            </Link>
          </motion.div>
        ))}
        <div className="absolute bottom-4 z-10 right-4 sm:flex gap-4 hidden ">
          <button
            className={`bg-white p-3 rounded-full ${
              index < 1 && "bg-opacity-50"
            }`}
            onClick={goPrev}
          >
            <img src={arrow} className="rotate-180" alt="" />
          </button>
          <button
            className={`bg-white p-3 rounded-full ${
              index === articles.length - 1 && "bg-opacity-50"
            }`}
            onClick={goNext}
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
