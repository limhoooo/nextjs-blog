import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">
        <Link href="/">Ho Blog</Link>
      </h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/article">Article</Link>
      </nav>
    </header>
  );
};

export default Header;
