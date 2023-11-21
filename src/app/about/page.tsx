import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "limhoooo 커리어 소개",
};

const About = () => {
  const TITLE_CLASS = `text-2xl font-bold text-gray-800 my-2`;
  return (
    <section className="flex flex-col items-center">
      <Hero />
      <h2 className="text-3xl font-bold my-2">Or Send me an email</h2>
      <ContactForm />
      <section className="bg-gray-100 shadow-lg w-full p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>개발을 사랑하는 풀스택 개발자</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>구글러 (-Now)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Vue</p>
      </section>
    </section>
  );
};

export default About;
