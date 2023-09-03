"use client";
import type { Route } from "next";
import { useRef, useState } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import { Navbar, SaleNotification } from ".";

interface Props {}

export default function Header({}: Props) {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <header className="relative flex h-fit w-full flex-col items-center justify-center md:h-36">
      {isShowing && (
        <div className="h-8 w-full text-xl">
          <SaleNotification setIsShowing={setIsShowing} />
        </div>
      )}
      <>
        <div
          ref={ref}
          className="z-50 flex h-14 w-full max-w-7xl items-center justify-center bg-background px-2 md:h-36"
        >
          <Navbar
            imageSize={[120, 120]}
            hrefs={{ account: "/account" as Route, cart: "/cart" as Route }}
          />
        </div>
      </>
      <>
        {!isVisible && (
          <div className="fixed top-0 z-50 flex h-14 w-full max-w-7xl items-center justify-center bg-background px-2 md:h-36">
            {" "}
            <Navbar
              imageSize={[120, 120]}
              hrefs={{ account: "/account" as Route, cart: "/cart" as Route }}
            />
          </div>
        )}
      </>
    </header>
  );
}
