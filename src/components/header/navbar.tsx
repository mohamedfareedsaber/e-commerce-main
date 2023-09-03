import Image from "next/image";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import Link from "next/link";
import type { Route } from "next";

interface Props {
  imageSize: [number, number];
  hrefs: {
    account: Route;
    cart: Route;
  };
}

export default function Navbar({ imageSize, hrefs }: Props) {
  return (
    <nav className="flex h-full w-full items-center justify-between gap-x-2">
      <div className="flex h-full w-1/6 items-center justify-center">
        <FiSearch className="h-2/3 w-fit hover:scale-110 max-h-8" />
      </div>
      <div className="w-full">
        <Link href="/">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={imageSize[0]}
            height={imageSize[1]}
          />
        </Link>
      </div>
      <div className="flex h-full w-2/5 items-center justify-around">
        <Link href={hrefs.account} className="h-1/2 max-h-8 w-full hover:scale-110">
          <FaUser className="h-full w-full"/>
        </Link>
        <Link href={hrefs.cart} className="h-1/2 max-h-8 w-full hover:scale-110">
          <FaShoppingCart className="h-full w-full" />
        </Link>
      </div>
    </nav>
  );
}
