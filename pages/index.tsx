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
          content={`Michael Njoroge, Software Engineer in Kenya, Web Developer in Kenya, Mobile Developer in Kenya, Software Development Portfolio Kenya, Web Development Portfolio Kenya, Mobile App Development Kenya, Full Stack Developer Kenya, Frontend Developer Kenya,Backend Developer Kenya`}
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="author" content="Michael Njoroge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="2DGemgww5DjzFXCWRAhOxVJEEZeRZNka-d0Dp5AEtg4" />
      </Head>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
