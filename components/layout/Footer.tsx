import Link from "next/link";
import { Now } from "../utils/now";
import Image from "next/image";
import { CONTACT_INFO, PAGES, SERVICES, SOCIAL_MEDIA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-20 xl:px-80 py-4 mt-16">
      <div className="grid grid-cols-4 mb-4 gap-8">
        <div className="">
          <div className="flex items-center mb-8">
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

          <div className="text-text text-sm mb-8">
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
                <div className="text-text text-base mb-4 hover:text-secondary hover:text-shadow-sm hover:text-shadow-secondary/10">
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
                <div className="text-text text-base mb-4 hover:text-secondary hover:text-shadow-sm hover:text-shadow-secondary/10">
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
                <div className="flex items-center gap-2 text-text text-base mb-4 hover:text-secondary hover:text-shadow-sm hover:text-shadow-secondary/10">
                  <span className="text-primary">{<Icon size={20} />}</span>
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="container flex items-center justify-between border-t border-text/10 pt-4">
        <p className="text-sm font-medium text-muted-foreground">
          © <Now formate="YYYY" /> Triadz. All rights reserved.
        </p>
        <p className="text-sm font-medium text-muted-foreground">
          <Link
            href="/privacypolicy"
            className="font-semibold hover:underline mr-4"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-semibold hover:underline ml-4">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
