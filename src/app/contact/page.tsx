import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "limhoooo에게 메일 보내기",
};

const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>Email : dlagh123@gmail.com</p>
      <h2 className="text-xl font-bold my-2">
        문의사항은 저에게 메일을 보내주세요.
      </h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
