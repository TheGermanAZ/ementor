import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session!.user?.email} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button className="btn btn-primary"> click me</button>
      Not signed in <br />
      <button className="btn btn-primary" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};

export default Home;
