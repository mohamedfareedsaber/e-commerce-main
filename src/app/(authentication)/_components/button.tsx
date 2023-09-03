import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}

export default function Button({ children, type, secondary }: Props) {
  return (
    <button
      className={clsx(
        "min-w-fit rounded-sm px-4 py-2",
        secondary
          ? "w-1/3 !p-0 text-sm text-primary hover:text-primary/80"
          : "w-2/4 bg-primary text-secondary hover:bg-primary/80",
      )}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}
