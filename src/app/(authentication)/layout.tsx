interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col items-center justify-center">
      {children}
    </main>
  );
}
