import Link from "next/link";
import { Now } from "../utils/now";
import Image from "next/image";
import { CONTACT_INFO, PAGES, SERVICES, SOCIAL_MEDIA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto py-8 sm:py-12 mt-12 sm:mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12 gap-8 sm:gap-10">
        <div className="">
          <div className="flex items-center mb-6 sm:mb-8">
            <Link href={PAGES.HOME.href}>
              <Image
                src="/logo.png"
                alt="Triadz Solution Logo"
                width={40}
                height={40}
              />
            </Link>
            <div className="text-primary text-3xl font-black ml-2">Triadz</div>
          </div>

          <div className="text-text text-sm mb-6 sm:mb-8 leading-relaxed">
            Your Ideas. Our Creativity. Powerful Digital Solutions.
          </div>

          <div className="flex items-center gap-2">
            {Object.values(SOCIAL_MEDIA).map((item, index) => {
              const { href, Icon, label } = item;
              return (
                <Link
                  href={href}
                  key={index}
                  aria-label={label}
                  target="_blank"
                  className="p-2 rounded bg-card text-text hover:text-secondary hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 ease-in-out"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="">
          <div className="text-foreground font-semibold text-base mb-4">
            QUICK LINKS
          </div>
          {Object.values(PAGES).map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <div className="text-text text-base mb-3 hover:text-secondary hover:text-shadow-sm hover:text-shadow-secondary/10 transition-colors">
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="">
          <div className="text-foreground font-semibold text-base mb-4">
            SERVICES
          </div>
          {Object.values(SERVICES).map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <div className="text-text text-base mb-3 hover:text-secondary hover:text-shadow-sm hover:text-shadow-secondary/10 transition-colors">
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="">
          <div className="text-foreground font-semibold text-base mb-4">
            CONTACT INFO
          </div>
          {CONTACT_INFO.map((item, index) => {
            const { Icon } = item;
            return (
              <Link href={item.href} key={index} target="_blank">
                <div className="flex items-center gap-2.5 text-text text-base mb-3 hover:text-secondary hover:text-shadow-sm hover:text-shadow-secondary/10 transition-colors">
                  <span className="text-primary shrink-0">{<Icon size={18} />}</span>
                  <span className="break-all">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-text/10 pt-6 text-center sm:text-left">
        <p className="text-sm font-medium text-text">
          © <Now formate="YYYY" /> Triadz. All rights reserved.
        </p>
        <p className="text-sm font-medium text-text flex items-center gap-4">
          <Link
            href="/privacypolicy"
            className="hover:underline hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:underline hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
