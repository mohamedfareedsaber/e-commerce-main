import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getCsrfToken } from "next-auth/react";

import Container from "../_components/container";
import Form from "./_components/form";
import OAuthProviders from "./_components/oauth-providers";

import config from "@/config.json";
import AuthOptions from "@/app/api/auth/[...nextauth]/auth-options";

export default async function Page() {
  // @ts-ignore
  const cookieStore = cookies(); // https://github.com/nextauthjs/next-auth/discussions/7256#discussioncomment-6271238
  const csrfToken = await getCsrfToken();
  const session = await getServerSession(AuthOptions);

  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <div className="relative mb-4 flex items-center justify-center rounded-full bg-secondary p-12">
        <Image src="/next.svg" alt="logo" className="absolute px-2" fill />
      </div>
      <Container>
        {config["oauth-support"] && (
          <>
            <OAuthProviders />
            <div className="flex items-center justify-center">
              <span className="w-full border border-accent"></span>
              <span className="px-4 text-xl text-text">OR</span>
              <span className="w-full border border-accent"></span>
            </div>
          </>
        )}
        <Form csrfToken={csrfToken!} />
      </Container>
    </>
  );
}
