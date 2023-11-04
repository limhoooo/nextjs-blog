import ContactForm from "@/components/ContactForm";
import { link } from "fs";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  const LINKS = [
    {
      icon: <AiFillGithub />,
      url: "https://github.com/limhoooo",
    },
    {
      icon: <AiFillGithub />,
      url: "https://github.com/limhoooo",
    },
    {
      icon: <AiFillGithub />,
      url: "https://github.com/limhoooo",
    },
  ];
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>dlagh123@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            className="text-5xl hover:text-yellow-500"
          >
            {item.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-2">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
