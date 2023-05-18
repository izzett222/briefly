import { useSearchParams } from "react-router-dom";
import SearchResults from "../components/SearchResults";

export default function Search() {
  const [searchParam] = useSearchParams();
  const searchValue = searchParam.get("q");
  return (
    <div>
      <h2 className="text-[30px] tracking-[-2px] after:block after:bg-[#C1BB25] after:h-2.5 after:w-[72px] relative after:absolute after:bottom-2 font-extrabold sm:mb-2">
        <p className="relative z-10 text-[#454541] flex items-center">
          Search results: &nbsp; <span className="hidden sm:inline-block max-w-[40%] truncate">{searchValue}</span>
        </p>{" "}
      </h2>
      <h2 className="text-[#454541] text-lg font-bold max-w-[70%] sm:hidden truncate">{searchValue}</h2>
      {!searchValue ? (
        <div className="mt-10 sm:mt-0">
          <h2>Please provide a search value</h2>
        </div>
      ) : (
        <SearchResults searchValue={searchValue} />
      )}
    </div>
  );
}
