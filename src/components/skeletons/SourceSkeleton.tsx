import Skeleton from "react-loading-skeleton";

export default function SourceSkeleton() {
  return (
    <div className="w-full grid grid-flow-col  gap-2  sm:gap-5">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
        <Skeleton key={index} className="block w-[100px] h-[35px] mb-4" />
      ))}
    </div>
  );
}
