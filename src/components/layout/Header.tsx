"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const menu = [
  { title: "About", href: "/", label: "about page로 이동" },
  { title: "Posts", href: "/posts", label: "posts page로 이동" },
  { title: "Article", href: "/article", label: "article page로 이동" },
];
const Header = () => {
  const pathname = usePathname();
  const [menuIndex, setMenuIndex] = useState(0);
  const menuBoxTranslate = menu.map(
    (_, index) => `translateX(${index * 60}px)`
  );
  const activeMenuBoxClass = { transform: `${menuBoxTranslate[menuIndex]}` };
  const menuHover = (index: number) => {
    setMenuIndex(index);
  };
  const findActiveMenu = () => {
    const activePathIndex = menu.findIndex((item) => item.href === pathname);
    setMenuIndex(activePathIndex);
  };
  useEffect(() => {
    findActiveMenu();
  }, [pathname]);

  return (
    <header className="fixed-custom">
      <div className="flex justify-between items-center p-4 max-w-5xl m-auto">
        <h1 className="text-3xl font-bold" role="banner">
          <Link href="/" aria-label="클릭시 메인페이지로 이동">
            Ho Blog
          </Link>
        </h1>
        <nav onMouseLeave={findActiveMenu}>
          <ul className="flex gap-4">
            {menu.map((menu, index) => (
              <li
                key={menu.title}
                role="menuitem"
                className="w-11"
                onMouseOver={() => menuHover(index)}
              >
                <Link href={menu.href} aria-label={menu.label}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
          <div
            aria-label="active menu bar"
            className={`w-12 h-1 bg-orange transition`}
            style={activeMenuBoxClass}
          ></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
