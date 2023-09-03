"use client";

import Card from "@/components/card";
import Image from "next/image";
import { useState } from "react";
import Price from "./price";
import Name from "./name";
import clsx from "clsx";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { PiShoppingCartFill } from "@react-icons/all-files/pi/PiShoppingCartFill";
interface Variation {
  value: string;
  image?: string;
  available?: boolean;
}

type VariationTypes = "color" | "size";

type Variations = (Record<"type", VariationTypes> & Variation)[];

interface Props {
  name: string;
  brand: string;
  images: { id: string; url: string }[];
  price: number;
  discount?: number;
  selectedVaraient: string;
  variations: Variations;
  currency: string;
}

const groubBy = <T extends Record<K, any>, K extends keyof any>(
  key: K,
  values: T[],
) => {
  return values.reduce(
    (groups, item) => {
      (groups[item[key]] ||= []).push(item);
      return groups;
    },
    {} as Record<T[K], T[]>,
  );
};

export default function Product({
  variations,
  currency,
  discount = 0,
  ...props
}: Props) {
  const [src, setSrc] = useState(props.images[0]);
  const [selectedVarient, setSelectedVarient] = useState();
  const varients = groubBy("type", variations);
  return (
    <div className="flex h-full [&>*]:bg-transparent [&>*]:p-0 [&>*]:hover:scale-100">
      <Card>
        <div className="relative h-2/5 w-full rounded-t-2xl">
          <Image src={src} alt={props.name} fill />
        </div>
        <div className="flex h-3/5 w-full flex-col justify-around px-3">
          <Name brand={props.brand} name={props.name} />
          <Price discount={discount} price={props.price} currency={currency} />
          <div className="flex flex-col items-start justify-center gap-y-4">
            {Object.values(varients).map((variations, key) => (
              <VariationWrapper key={key} variations={variations} />
            ))}
          </div>
          <div className="flex gap-x-3">
            <button className="group flex h-full w-full items-center justify-center gap-x-2 rounded-md bg-primary p-2 text-white transition-colors hover:bg-primary/90">
              <PiShoppingCartFill className="group-hover:scale-110" /> Add To
              Cart
            </button>
            <button
              className="w-3/12 rounded-md text-primary transition-all hover:scale-110 hover:text-primary/90"
              onClick={() => {}} // show model
            >
              <AiOutlineEye className="h-10 w-full" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function VariationWrapper({ variations }: { variations: Variations }) {
  return (
    <div className="flex h-8 gap-x-2 [&>*]:w-8">
      {variations.map((variation, key) => (
        <Variation key={key} {...variation} />
      ))}
    </div>
  );
}

function Variation({ type, ...props }: Variation & { type: VariationTypes }) {
  switch (type) {
    case "color":
      return <ColorVariation {...props} />;
    case "size":
      return <SizeVariation {...props} />;
    default:
      throw new Error("Undefined type: " + type);
  }
}

function ColorVariation({ value, available = true, image }: Variation) {
  return (
    <div
      style={{ backgroundColor: value }}
      className={clsx(
        "relative h-full rounded-full",
        available && "hover:scale-110 hover:cursor-pointer",
        // "hover:outline hover:outline-emerald-600",
        !available && [
          `before:content[' '] after:content[' '] before:absolute before:top-1/2 before:w-full before:-translate-y-1/2
           before:rotate-45 before:border before:border-black after:absolute after:top-1/2 after:w-full
           after:-translate-y-1/2 after:-rotate-45 after:border after:border-black`,
        ],
      )}
      // onClick={() => setImage(image)} // use context
    ></div>
  );
}

function SizeVariation({ value, available = true }: Variation) {
  return (
    <div
      className={clsx(
        "font-extra-light relative flex h-fit w-fit items-center justify-center rounded-md bg-gray-400/40 p-1",
        available && "hover:scale-110 hover:cursor-pointer",
        !available && [
          `before:content[' '] after:content[' '] before:absolute before:left-1/2 before:top-1/2 before:w-full
           before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border before:border-black after:absolute
           after:left-1/2 after:top-1/2 after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45
           after:border after:border-black `,
        ],
      )}
    >
      {value}
    </div>
  );
}
