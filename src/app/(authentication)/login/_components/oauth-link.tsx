"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import { ComponentType } from "react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface Props {
  provider: ClientSafeProvider;
}

const getProviderComponent = (providerIcon: string): ComponentType<any> =>
  dynamic(() =>
    import(`@react-icons/all-files/fa/Fa${providerIcon}.js`).then(
      (module) => module[`Fa${providerIcon}`],
    ),
  );
export default function OAuthLink({ provider }: Props) {
  const ProviderIcon = useMemo(
    () =>
      getProviderComponent(
        provider.name.at(0)?.toUpperCase() +
          provider.name.slice(1).toLowerCase(),
      ),
    [provider],
  );
  return (
    <button
      onClick={() => signIn(provider.id, { callbackUrl: provider.callbackUrl })}
      className="flex h-fit w-full items-center justify-center rounded-full bg-secondary"
    >
      <div className="flex flex-col-reverse items-center justify-center">
        <p className="peer">{provider.name}</p>
        <ProviderIcon className="h-full w-full max-w-[4rem] transition-transform hover:scale-105 peer-hover:scale-105" />
      </div>
    </button>
  );
}
