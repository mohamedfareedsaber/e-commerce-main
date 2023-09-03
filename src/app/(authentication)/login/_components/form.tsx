"use client";

import { signIn } from "next-auth/react";
import { FormEvent, FormHTMLAttributes } from "react";
import Field from "../../_components/field";
import Button from "../../_components/button";
import Link from "next/link";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  csrfToken: string;
}
export default function Form({ csrfToken }: Props) {
  // TODO: Add Form validation
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      username: "asdasd",
      password: "sadasdas",
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-y-2">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <Field name="username" />
      <Field name="password" type="password" />
      <div className="mt-4 flex items-center justify-between">
        <Button type="submit">Login</Button>
        <Link href="/forgot-password">
          <Button secondary>Forgot Password?</Button>
        </Link>
      </div>
    </form>
  );
}
