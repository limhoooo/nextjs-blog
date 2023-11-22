import Image from "next/image";
import React from "react";
import profileImage from "../../public/images/profile.jpg";
import ContactIcons from "./ContactIcons";
const Hero = () => {
  const TITLE = `프론트엔드 개발자 <b>임호</b>입니다.`;
  const DESC = `4년차 프론트엔드 개발자로 웹 및 반응형 서비스를 개발, 배포, 운영 경험이 있습니다.<br />
  빠르게 변화하는 기술에 적응하며, 업무 또는 개인적인 공부를 통해 알게된<br />
  경험이나 노하우를 기록하고 기술 전파하는 것을 매우 좋아합니다.`;
  return (
    <section className="flex justify-center max-md:text-center max-md:flex-wrap">
      <Image
        className="rounded-full"
        src={profileImage}
        alt="profile image"
        width={250}
        height={250}
        priority
      />
      <div className="ml-20 max-md:m-0">
        <h2 className="text-3xl font-bold mt-2">Front-End Engineer</h2>
        <p className="mt-3" dangerouslySetInnerHTML={{ __html: TITLE }}></p>
        <p className="mt-8" dangerouslySetInnerHTML={{ __html: DESC }}></p>
        <ContactIcons />
      </div>
    </section>
  );
};

export default Hero;
