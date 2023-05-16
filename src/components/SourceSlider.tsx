import { NavLink } from "react-router-dom";
import { useGetSourcesQuery } from "../features/api/apiSlice";
import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";
import { useRef, useState } from "react";

export default function SourceSlider() {
  const { data, isError } = useGetSourcesQuery(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const motionContainerRef = useRef<HTMLDivElement>(null);
  const [viewed, setViewed] = useState(0);

  const goForward = () => {
    const motionContainerWidth = motionContainerRef.current
      ?.scrollWidth as number;
    const containerWidth = containerRef.current?.offsetWidth as number;
    if (typeof data === "undefined") return;
    if (viewed < motionContainerWidth / containerWidth - 1) {
      setViewed(viewed + 1);
    }
  };
  const goBack = () => {
    if (viewed > 0) {
      setViewed(viewed - 1);
    }
  };
  if (isError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">No article found</h2>
      </div>
    );
  }
  return (
    <div className="border-b-[0.6px] border-b-[#C9C8B2] gap-2 grid items-center grid-cols-sources pb-2.5 mb-4">
      <button onClick={goBack}>
        <img src={arrow} alt="" className="rotate-180 -ml-2-" />
      </button>
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          animate={{ x: `-${viewed * 100}%` }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="h-[20px] flex gap-5"
          ref={motionContainerRef}
        >
          {data?.map((source: Source) => (
            <div key={source.id}>
              <NavLink
                to={`/source/${source.id}`}
                className={({ isActive }) => `hover:underline w-max inline-block ${isActive ? "font-bold" : ""}`}
              >
                {source.name}
              </NavLink>
            </div>
          ))}
        </motion.div>
      </div>
      <button onClick={goForward}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}
