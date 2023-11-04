import Hero from "@/components/Hero";
import React from "react";

const About = () => {
  const TITLE_CLASS = `text-2xl font-bold text-gray-800 my-2`;
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>개발을 사랑하는 풀스택 개발자</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>구글러 (-Now)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Vue</p>
      </section>
    </>
  );
};

export default About;
