import React from "react";
import "./Home.css";
import NavbarComp from "../../components/Navbar/NavbarComp";
import Hero from "../../components/Hero/Hero";
import HowToJoin from "../../components/HowToJoin/HowToJoin";
import Courses from "../../components/Courses/Courses";
import Feature from "../../components/Features/Feature";
import Community from "../../components/Comminity/Community";
import Contact from "../../components/Contact/Contact";
function Home() {
  return (
    <>
      <NavbarComp />
      <Hero />
      <HowToJoin />
      <Courses />
      <Feature />
      <Community />
      <Contact />
    </>
  );
}

export default Home;
