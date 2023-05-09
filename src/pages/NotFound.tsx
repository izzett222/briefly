import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="px-5 mt-8">
      <div className="max-w-[800px] border border-[#d1d1d1] h-[400px] mx-auto border-t-[10px] border-t-[#4f7177] p-8">
        <h1 className="text-[90px] font-extrabold text-[#4C4E4D] leading-[1]">
          Briefly
        </h1>
        <h2 className="text-[#4C4E4D] font-medium text-[37px] mt-5 mb-2.5">
          404 Not found
        </h2>
        <p className="text-[27px] text-[#4C4E4D] leading-[1.3]">
          This page couldn't be found! Visit the{" "}
          <Link to="/" className="underline">
            Briefly homepage
          </Link>{" "}
          if you like.
        </p>
      </div>
    </div>
  );
}
