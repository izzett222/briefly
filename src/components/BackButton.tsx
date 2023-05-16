import back from "../assets/back.svg";
interface BackProps {
  handleClick: () => void;
}

export default function BackButton({ handleClick }:BackProps) {
  return (
    <button onClick={handleClick} className="flex gap-2 items-center">
      <img src={back} alt="" className="h-[20px] w-[20px]" /> back
    </button>
  );
}
