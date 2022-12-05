import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
     <Head>
      <title>SHITPOST</title>
      <meta name="some text" content="some content"/>
      <link rel="icon" href="/favicon.ico" />
     </Head>

     <div>
      
     </div>
    </>
  );
};

export default Home;


