import Image from "next/image";
import Link from "next/link";

interface Props {
  company: string;
  ourContactInfo: string;
}

export default function End({ company, ourContactInfo }: Props) {
  const year = new Date().getFullYear();
  return (
    <div className="flex w-full flex-col items-center justify-around md:flex-row">
      <div className="flex w-1/3 items-center justify-center">
        <Link href="/" className="relative h-8 w-full">
          <Image src="/vercel.svg" alt="logo" className="h-full w-fit" fill />
        </Link>
      </div>
      <p className="w-2/3 text-center capitalize md:text-start">
        Copyright &copy; {year}, {company}. Developed By {" "}
        <a className="underline" href={ourContactInfo}>
          Talented People
        </a>
      </p>
    </div>
  );
}
