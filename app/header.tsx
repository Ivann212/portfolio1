"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full mb-8 bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-center items-center py-4 px-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600 pr-20">Mon Portfolio</h1>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/projets" className="hover:text-blue-500">Projets</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
