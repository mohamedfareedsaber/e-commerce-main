export default function Price({
  discount,
  price,
  currency,
}: {
  discount: number;
  price: number;
  currency: string;
}) {
  return (
    <div className="flex gap-x-2 text-xl">
      Price:
      {discount > 0 && (
        <span className="line-through">
          {price} {currency}
        </span>
      )}
      <span className="text-red-600">
        {Math.round((1 - discount) * price)} {currency}
      </span>
    </div>
  );
}

