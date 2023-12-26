import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Footer from "./Footer";
import Testimonal from "./testimonal/Testimonal";
import Head from "../common/header/Header";
import ScrollToTopButton from "./ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Head />
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
