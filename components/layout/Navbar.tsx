"use client";

import {
  MailIcon,
  RightArrowIcon,
  WhatsappIcon,
} from "@/components/icons";
import { CONTACT_DETAILS, PAGES, SOCIAL_MEDIA } from "@/lib/data";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(path);

  // Close mobile menu immediately if route changes during render
  if (path !== prevPath) {
    setPrevPath(path);
    setIsMobileMenuOpen(false);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & close on resize
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#181C22]/90 backdrop-blur-xl border-b border-chip/60 shadow-lg shadow-black/20 py-3 sm:py-3.5"
            : "bg-transparent border-b border-transparent shadow-none py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-between w-full">
          {/* Brand Logo & Name */}
          <Link
            href={PAGES.HOME.href}
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Triadz Solution Logo"
                fill
                sizes="(max-width: 640px) 36px, 44px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-primary text-2xl sm:text-3xl font-black tracking-tight">
              Triadz
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {Object.values(PAGES).map((item) => {
              const isActive = item.href === path;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 hover:text-primary relative py-1 ${
                    isActive ? "text-primary font-semibold" : "text-text"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Button */}
            <Link
              href={PAGES.CONTACT.href}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-primary text-background font-bold text-xs sm:text-sm rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get a Quote
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-card border border-chip/80 text-foreground hover:text-primary hover:border-primary/50 transition-all focus:outline-none cursor-pointer p-2"
            >
              <span
                className={`block h-0.5 w-5 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current rounded-full transition-opacity duration-200 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-down Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[58px] sm:top-[68px] left-0 right-0 z-50 md:hidden bg-[#1A1E25] border-b border-chip/80 shadow-2xl overflow-y-auto max-h-[calc(100vh-68px)]"
            >
              <div className="px-5 py-6 flex flex-col gap-6">
                {/* Navigation Links */}
                <div className="flex flex-col gap-1.5">
                  <div className="text-[11px] font-semibold text-placeholder uppercase tracking-wider px-3 mb-1">
                    Navigation
                  </div>
                  {Object.values(PAGES).map((item) => {
                    const isActive = item.href === path;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base transition-all ${
                          isActive
                            ? "bg-primary/15 text-primary font-bold border border-primary/30"
                            : "text-foreground hover:bg-card hover:text-primary font-medium"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className={isActive ? "text-primary" : "text-placeholder"}>
                          <RightArrowIcon size={16} />
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA Button */}
                <div className="pt-2 border-t border-chip/60 flex flex-col gap-3">
                  <Link
                    href={PAGES.CONTACT.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3.5 bg-primary text-background font-bold text-center rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get a Free Quote</span>
                    <RightArrowIcon size={18} />
                  </Link>
                </div>

                {/* Quick Direct Contacts */}
                <div className="pt-2 border-t border-chip/60 flex flex-col gap-2">
                  <div className="text-[11px] font-semibold text-placeholder uppercase tracking-wider px-1">
                    Direct Contact
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      href={CONTACT_DETAILS.whatsAppLink}
                      target="_blank"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-chip/60 text-xs text-text hover:text-green hover:border-green/40 transition-colors"
                    >
                      <span className="text-green shrink-0">
                        <WhatsappIcon size={18} />
                      </span>
                      <span className="truncate">WhatsApp</span>
                    </Link>
                    <Link
                      href={CONTACT_DETAILS.mailLink}
                      target="_blank"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-chip/60 text-xs text-text hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      <span className="text-primary shrink-0">
                        <MailIcon size={18} />
                      </span>
                      <span className="truncate">Email Us</span>
                    </Link>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {Object.values(SOCIAL_MEDIA).map((item, index) => {
                    const { href, Icon, label } = item;
                    return (
                      <Link
                        href={href}
                        key={index}
                        aria-label={label}
                        target="_blank"
                        className="p-2.5 rounded-xl bg-card border border-chip/60 text-text hover:text-primary hover:border-primary/40 transition-all"
                      >
                        <Icon size={16} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
