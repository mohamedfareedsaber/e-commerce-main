interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="h-full w-full rounded-2xl p-1 shadow-xl transition-transform duration-200 ease-in-out hover:scale-105">
      {children}
    </div>
  );
}
