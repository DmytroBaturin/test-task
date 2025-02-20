import { HexagonImage } from "@/pages/main/ui/components/hexagon";

interface CommentProps {
  username: string;
  status: string;
  text: string;
}

export const Comment = ({ username, status, text }: CommentProps) => {
  return (
    <div className="bg-white/10 max-w-[522px] w-full rounded-[4px] h-fit flex py-[24px] px-[16px]  gap-3">
      <div className="w-[81px] ">
        <HexagonImage />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex-col flex">
          <h3 className="text-[20px] font-medium">{username}</h3>
          <p className="text-[14px] text-[#A5AEBC]">{status}</p>
        </div>
        <p className="max-w-[397px] opacity-80 text-[16px]">{text}</p>
      </div>
    </div>
  );
};
