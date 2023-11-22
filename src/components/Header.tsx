import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">
        <Link href="/">Ho Blog</Link>
      </h1>
      <nav role="navigation">
        <ul className="flex gap-4">
          <li>
            <Link href="/" aria-label="home 으로 이동" role="menuitem">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="about 으로 이동" role="menuitem">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" aria-label="posts 으로 이동" role="menuitem">
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/article"
              aria-label="article 으로 이동"
              role="menuitem"
            >
              Article
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
