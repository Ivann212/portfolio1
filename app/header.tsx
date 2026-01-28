"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          backdrop-blur-md bg-white/80
          border border-gray-200/50
          rounded-full shadow-lg
          px-8 py-3
          transition-all duration-300 ease-out
          ${scrolled ? "shadow-xl scale-[0.98]" : "scale-100"}
        `}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <h1
              className={`
                text-xl font-bold
                bg-gradient-to-r from-blue-600 to-indigo-600 
                bg-clip-text text-transparent
                transition-all duration-300
                hover:scale-105
              `}
            >
              Mon Portfolio
            </h1>
          </Link>

          <ul className="flex items-center gap-2">
            <li>
              <Link
                href="/projets"
                className={`
                  px-5 py-2 rounded-full
                  font-medium text-sm
                  transition-all duration-300
                  ${
                    isActive("/projets")
                      ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100/80"
                  }
                `}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`
                  px-5 py-2 rounded-full
                  font-medium text-sm
                  transition-all duration-300
                  ${
                    isActive("/contact")
                      ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100/80"
                  }
                `}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}