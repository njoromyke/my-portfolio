import Projects from "@/components/projects/projects";
import React from "react";
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import Footer from "@/components/footer/footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
