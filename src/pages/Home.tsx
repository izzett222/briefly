import NewsList from "../components/NewsList";
import {
  useGetFeaturedQuery,
  useGetSourcesQuery,
} from "../features/api/apiSlice";

export default function Home() {
  const { isLoading, isError, data: news } = useGetFeaturedQuery(undefined);
  const {  isError: sourcesError } =
    useGetSourcesQuery(undefined);
  if (isError || sourcesError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">There was an error while loading news</h2>
      </div>
    );
  }
  return (
    <div className="h-full">
      <div className="h-full">
        <NewsList
          title="Trending"
          news={news || [0,1,2,3,4,5,6,7,8,9]}
          isLoading={isLoading}
          to="/article"
        />
      </div>
    </div>
  );
}
