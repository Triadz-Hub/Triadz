"use client";

import { PAGES } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
                fixed top-0 left-0 z-50 w-full
                flex items-center justify-between
                px-6 lg:px-20 xl:px-80 py-4
                transition-all duration-300 ease-in-out
                ${
                  isScrolled
                    ? "bg-background/85 backdrop-blur-xl border-b border-secondary/10 shadow-lg shadow-primary/10"
                    : "bg-transparent border-b border-transparent shadow-none"
                }
            `}
    >
      <div className="flex items-center">
        <Link href={PAGES.HOME.href}>
          <Image
            src="/logo.png"
            alt="Triadz Solution Logo"
            width={60}
            height={60}
          />
        </Link>

        <div className="text-primary text-3xl font-black ml-2">Triadz</div>
      </div>

      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        {Object.values(PAGES).map((item) => {
          const isActive = item.href === path;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                                transition-colors duration-200
                                hover:text-primary
                                ${isActive ? "text-primary" : "text-secondary"}
                            `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div>
        <Link
          href={PAGES.CONTACT.href}
          className="
                        inline-block px-4 py-2
                        bg-primary text-background
                        rounded-lg cursor-pointer
                        hover:shadow-md hover:shadow-primary/30
                        transition-all duration-200
                        font-semibold
                    "
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
