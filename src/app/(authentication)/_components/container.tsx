interface Props {
  children: React.ReactNode
}
export default function Container({children}: Props) {
  return (
    <div className="flex w-full flex-col gap-y-4 rounded-md bg-secondary p-4 shadow-xl shadow-text/20">
      {children}
    </div>
  );
}
