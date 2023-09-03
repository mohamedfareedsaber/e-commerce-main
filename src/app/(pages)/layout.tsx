import { Header } from "@/components/header/";
import { Footer } from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex h-full w-full flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
