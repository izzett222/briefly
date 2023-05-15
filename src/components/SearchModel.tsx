import { Dialog } from "@reach/dialog";
import { SyntheticEvent, useEffect, useState } from "react";
import search from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import close from "../assets/close.svg";

interface SearchModelProps {
  open: boolean;
  updateOpen: (value?: boolean) => void;
}
export default function SearchModel({ open, updateOpen }: SearchModelProps) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && event.ctrlKey) {
        event.preventDefault();
        updateOpen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [updateOpen]);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (searchValue.trim() === "") return;
    setSearchValue("");
    updateOpen(false);
    navigate(`/search?q=${searchValue.trim()}`);
  };
  return open ? (
    <Dialog
    onDismiss={() => updateOpen(false)}
      style={{
        padding: "0px",
        marginTop: "160px",
        zIndex: 100,
        minWidth: "310px",
      }}
    >
      <div className="h-[100px] rounded-sm flex flex-col justify-center px-4 relative">
        <button
          onClick={() => updateOpen(false)}
          className="absolute bg-white w-10 h-10 flex items-center justify-center left-[45%] -top-12 rounded-full"
        >
          <img src={close} className="w-8 h-8" alt="" />
        </button>
        <form
          className="w-full max-w-[736px] bg-[#F5F5EE] h-14 flex items-center pl-6"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 items-center">
            <img src={search} alt="search" width={20} height={20} />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
            className="pl-2 bg-transparent inline-block text-[#72716A] text-xs flex-1 h-full outline-none"
            placeholder="search"
          />
          <button className="bg-[#FFF200] text-xl text-[#4C4E4D] font-semibold h-full px-[18px]">
            Search
          </button>
        </form>
      </div>
    </Dialog>
  ) : null;
}
