import Title from "../components/title";
import type { NextPage } from "next";
import Nav from "../components/nav";
import Welcome from "../components/welcome";

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
      <Welcome />
    </>
  );
};

export default Home;
