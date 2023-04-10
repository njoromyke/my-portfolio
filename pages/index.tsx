import Projects from "@/components/projects/projects";
import React from "react";
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import Footer from "@/components/footer/footer";
import Head from "next/head";
// meta data

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Michael Njoroge.  A fullstack software engineer with a passion for building scalable and performant software systems. I have over 4
            years of experience in building web and mobile applications using modern technologies."
        />
        <meta
          name="keywords"
          content={`Michael Njoroge, Software Engineer in Kenya, Web Developer in Kenya, Mobile Developer in Kenya, Software Development Portfolio Kenya, Web Development Portfolio Kenya, Mobile App Development Kenya, Full Stack Developer Kenya, Frontend Developer Kenya,Backend Developer Kenya
Kenyan Software Developer, Kenyan Web Developer, Kenyan Mobile Developer, Kenyan Software Development Portfolio, Kenyan Web Development Portfolio, Kenyan Mobile App Development, Kenyan Full Stack Developer, Kenyan Frontend Developer,Kenyan Backend Developer,IT Professional in Kenya`}
        />
      </Head>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
