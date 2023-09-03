"use client";

import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import { useRef, Children, useState, useId, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function HorizontalScrollableContainer({ children }: Props) {
  const id = useId();
  const childrenCount = Children.count(children);
  const ref = useRef<HTMLDivElement>(null!);
  const [page, setPage] = useState<number>(1);
  const [scrollAmount, setScrollAmount] = useState<number>(null!);

  useEffect(() => {
    const func = () => {
      setScrollAmount(ref.current?.firstElementChild?.clientWidth!);
    };
    window.addEventListener("resize", func);
    func();
    return () => {
      window.removeEventListener("resize", func);
    };
  }, []);

  // react doesn't have onScrollEnd event :/
  useEffect(() => {
    const element = ref.current;
    const func = () => {
      if (scrollAmount)
        setPage(Math.floor(ref.current.scrollLeft / scrollAmount) + 1);
    };

    element.addEventListener("scrollend", func);
    return () => {
      element.removeEventListener("scrollend", func);
    };
  }, [scrollAmount]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2">
      <div className="flex h-full w-full items-center justify-center gap-x-4 py-4">
        <button
          className="absolute left-0 z-10 transition-transform hover:scale-125"
          onClick={() => {
            if (page === 1) {
              ref.current.scrollTo(ref.current.scrollWidth, 0);
              setPage(childrenCount);
              return;
            }
            ref.current.scrollBy(-scrollAmount, 0);
            setPage((prev) => (prev -= 1));
          }}
        >
          <MdKeyboardArrowLeft size="50" />
        </button>
        <div
          ref={ref}
          className="hide-scroll-bar flex h-full w-full snap-x snap-mandatory gap-x-4 overflow-x-scroll scroll-smooth px-4 py-8 [&>*]:flex-shrink-0 [&>*]:snap-center"
        >
          {children}
        </div>
        <button
          className="absolute right-0 z-10 transition-transform hover:scale-125"
          onClick={() => {
            if (page === childrenCount) {
              ref.current.scrollTo(0, 0);
              setPage(1);
              return;
            }
            ref.current.scrollBy(scrollAmount, 0);
            setPage((prev) => (prev += 1));
          }}
        >
          <MdKeyboardArrowRight size="50" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        {Array.from(Array(childrenCount).keys()).map((key) => (
          <input
            key={key}
            type="radio"
            className="h-4 w-4 appearance-none rounded-full border border-gray-400/40 bg-gray-400/40 checked:border-black checked:bg-black hover:cursor-pointer"
            value={key + 1}
            name={id}
            checked={key + 1 === page}
            onChange={(e) => {
              const value = +(e.target as HTMLInputElement).value;
              const relativePosition = value - page;
              ref.current.scrollBy(relativePosition * scrollAmount, 0);
              setPage(value);
            }}
          />
        ))}
      </div>
    </div>
  );
}
