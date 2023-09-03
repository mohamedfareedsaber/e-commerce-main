import { getProviders } from "next-auth/react";
import OAuthLink from "./oauth-link";

export default async function OAuthProviders() {
  const providers = await getProviders();

  return (
    <div className="flex w-full items-center justify-evenly">
      {Object.values(providers!)
        .filter((provider) => provider.name != "Credentials")
        .map((provider) => (
          <OAuthLink key={provider.name} provider={provider} />
        ))}
    </div>
  );
}
