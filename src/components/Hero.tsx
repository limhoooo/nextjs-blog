import Image from "next/image";
import React, { useState } from "react";
import profileImage from "../../public/images/profile.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="profile"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Ho"}</h2>
      <h3 className="text-xl font-semibold">{"Front-End Engineer"}</h3>
      <p>함께 성장해나가며 즐기는 개발자 임호</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
