export default function Name({ brand, name }: { [key: string]: string }) {
  return (
    <div className="w-full text-xl px-2">
      <p className="truncate">
        <span className="text-accent">{brand}</span> - {name}
      </p>
    </div>
  );
}
