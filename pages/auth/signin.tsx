import clsx from "clsx";
import { GetServerSideProps } from "next";
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  signIn,
} from "next-auth/react";
import { FiGithub } from "react-icons/fi";
import styles from "./signin.module.css";

type Props = {
  providers: ClientSafeProvider[];
  csrfToken: string;
};

export default function SignIn({ providers, csrfToken }: Props) {
  return (
    <main className="bg-white darK:bg-black h-[100vh]">
      <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
        {providers.map((provider) => (
          <div key={provider.id}>
            <Provider provider={provider} />
          </div>
        ))}
      </div>
    </main>
  );
}

function Provider({ provider }: { provider: ClientSafeProvider }) {
  return (
    <button
      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
      className={clsx(
        "bg-blue-500 text-white p-4 rounded-xl font-bold flex flex-row gap-2",
        "shadow-lg shadow-blue-300"
      )}
    >
      <span className="text-2xl">
        {provider.id === "github" && <FiGithub />}
      </span>
      {provider.name}
    </button>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  if (providers == null || csrfToken == null) return { notFound: true };

  return {
    props: { providers: [...Object.values(providers)], csrfToken },
  };
};
