import type { Dispatch, SetStateAction } from "react";

interface Props {
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}

export default function SaleNotification({ setIsShowing }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center gap-x-4 bg-red-400">
      <p className="text-white">Sale Up To 40% On Selected Items</p>
      <button
        className="text-black"
        onClick={() => {
          setIsShowing(false);
        }}
      >
        x
      </button>
    </div>
  );
}
