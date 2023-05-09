import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import SearchResult from "../components/SearchResult";

export default function SearchedArticle() {
  const { articleId, searchQuery } = useParams();
  if (searchQuery === undefined || articleId === undefined) {
    return <NotFound />;
  }
  return <SearchResult searchValue={searchQuery} articleId={articleId} />;
}
