import Title from "../components/title";
import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/nav";

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/services",
    label: "Sevices",
  },
  {
    link: "/mentoringNetwork",
    label: "Mentoring Network",
  },
  {
    link: "/freeResources",
    label: "Free Resources",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Nav links={links} />
      <Title />
    </>
  );
};

export default Home;
