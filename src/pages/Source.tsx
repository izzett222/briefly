import { useParams } from "react-router-dom";
import {
  useGetArticlesQuery,
  useGetSourcesQuery,
} from "../features/api/apiSlice";
import NewsList from "../components/NewsList";
import NotFound from "./NotFound";

export default function Source() {
  const { sourceId } = useParams();
  const {
    data: articles,
    isLoading,
    isError,
  } = useGetArticlesQuery({type: "source", source: sourceId as string});
  const { data, isLoading: sourcesLoading } = useGetSourcesQuery(undefined);
  const source = data?.find((source) => source.id === sourceId);
  if (isError) {
    return (
      <NotFound />
    );
  }
  return (
    <NewsList
      news={articles}
      isLoading={isLoading || sourcesLoading}
      title={source?.name}
      sourceId={sourceId}
      to={`/article`}
    />
  );
}
