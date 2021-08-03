import React from "react";
import Banner from "../components/Banner";
import About from "./About";
import Discover from "./Discover";
import Services from "./Services";
import SignUp from "./SignUp";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Discover />
      <Services />
      <SignUp />
    </>
  );
}

export default Home;
