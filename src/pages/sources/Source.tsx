import { useParams } from "react-router-dom";
import {
  useGetArticleFromSourceQuery,
  useGetSourcesQuery,
} from "../../features/api/apiSlice";
import NewsList from "../../components/NewsList";
import NotFound from "../NotFound";

export default function Source() {
  const { sourceId } = useParams();
  const {
    data: articles,
    isLoading,
    isError,
  } = useGetArticleFromSourceQuery(sourceId);
  const { data, isLoading: sourcesLoading } = useGetSourcesQuery(undefined);
  const source = data?.find((source) => source.id === sourceId);
  if (isError) {
    return (
      <NotFound />
    );
  }
  return (
    <NewsList
      news={articles || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
      isLoading={isLoading || sourcesLoading}
      title={source?.name}
      to={`/source/${sourceId}/article`}
    />
  );
}
