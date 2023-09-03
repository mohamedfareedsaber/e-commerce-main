import HorizontalScrollableContainer from "@/components/horizontal-scrollable-container";
import Product from "./_components/product";
import config from "@/config.json";

const product = {
  name: "aaskdlasld asdasd as dasdks asd",
  brand: "Diadora",
  images: ["/next.svg"],
  price: 690,
  discount: 0.2,
  variations: [
    {
      type: "color",
      value: "#ff25f5",
    },
    {
      type: "color",
      value: "#ff0000",
      available: false,
    },
    {
      type: "size",
      value: "42",
      available: false,
    },
    {
      type: "size",
      value: "40",
    },
  ],
};

const products = Array.from(Array(10).fill(product));

export default function Home() {
  return (
    <>
      <section className="h-screen w-full">
        <div className="h-[37rem] w-full">
          <HorizontalScrollableContainer>
            {products.map((product, key) => (
              <div
                key={key}
                className="flex h-full w-full items-center justify-center gap-x-4 [&>*]:w-full [&>*]:max-w-md"
              >
                <Product {...product} currency="EGP" />
              </div>
            ))}
          </HorizontalScrollableContainer>
        </div>
      </section>
    </>
  );
}
