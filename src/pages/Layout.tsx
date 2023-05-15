import { Link, Outlet } from "react-router-dom";
import search from "../assets/search.svg";
import SourceSlider from "../components/SourceSlider";
import SearchModel from "../components/SearchModel";
import { useState } from "react";
import { useGetSourcesQuery } from "../features/api/apiSlice";
import SourceSkeleton from "../components/skeletons/SourceSkeleton";

export default function Layout() {
  const { isLoading: sourcesLoading } = useGetSourcesQuery(undefined);
  const [open, setOpen] = useState<boolean>(false);
  const updateOpen = (value?: boolean) => {
    setOpen(value || !open);
  };

  return (
    <>
      <div className="min-h-screen isolate flex flex-col">
        <div className="mx-auto w-full max-w-[1080px] flex flex-1 flex-col px-2 xs:px-4">
          <div className="flex justify-between py-8">
            <div className="relative">
              <div className="absolute right-0 h-14 w-screen bg-[#FFF200]"></div>
              <Link
                to="/"
                className="text-[30px] relative z-10 font-extrabold pr-[20px] h-14 text-right flex justify-end items-center bg-[#FFF200] text-[#4C4E4D]"
              >
                Briefly
              </Link>
            </div>
            <button
              onClick={() => updateOpen(true)}
              className="w-full max-w-[682px] bg-[#F5F5EE] h-14 flex justify-between items-center px-6"
            >
              <div className="flex gap-2 items-center">
                <img src={search} alt="search" width={20} height={20} />
                <span className="text-[#72716A] text-xs">Search</span>
              </div>
              <div className="text-xs text-[#72716A] flex gap-0.5">
                <p className="bg-white px-1 rounded-s w-fit">ctrl</p>
                <p className="bg-white px-1 rounded-s w-fit">k</p>
              </div>
            </button>
          </div>
          <div>{sourcesLoading ? <SourceSkeleton /> : <SourceSlider />}</div>
          <div className="flex-1 relative">
            <Outlet />
          </div>
        </div>

        <footer className="text-[#4c4e4d] bg-[#e9e7e8] pb-5 xs:pb-0 border-t-[10px] px-4 border-t-[#fff200] mt-20">
          <div className="mx-auto max-w-[1080px] flex flex-col justify-center xs:flex-row xs:justify-between items-center isolate">
            <h1 className="text-[50px] leading-[1.2] xs:leading-[1.3] font-extrabold text-[#4C4E4D] py-5 xs:py-10">
              Briefly
            </h1>
            <p className="text-xl">© 2023 Briefly News</p>
          </div>
        </footer>
      </div>

      <SearchModel open={open} updateOpen={updateOpen} />
    </>
  );
}
