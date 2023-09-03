import AuthOptions from "@/app/api/auth/[...nextauth]/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(AuthOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      ACCOUNT PAGE
    </>
  );
}

