"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/email/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};
const INIT_FROM_DATA = {
  from: "",
  subject: "",
  message: "",
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(INIT_FROM_DATA);
  const [banner, setBanner] = useState<BannerData | null>();
  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setForm(INIT_FROM_DATA);
      })
      .catch(() => {
        setBanner({ message: "메일전송에 실패했습니다. ", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full  flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label className="font-semibold" htmlFor="from">
          Your Eamil
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          className="text-black"
          onChange={onchange}
        />
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          className="text-black"
          onChange={onchange}
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          className="text-black"
          onChange={onchange}
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}
