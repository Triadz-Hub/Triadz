import ContactForm from "@/components/forms/ContactForm";
import {
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  WhatsappIcon,
  XIcon,
} from "@/components/icons";
import { CONTACT_DETAILS } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Triadz",
  description:
    "Get in touch with Triadz for custom software development, digital marketing, AI video generation, and 3D design.",
};

export default function ContactPage() {
  return (
    <div className="px-6 lg:px-20 xl:px-80 pt-36 pb-24">
      <div className="max-w-3xl mb-12">
        <div className="px-4 py-1.5 rounded-full bg-card w-fit text-primary text-sm font-medium mb-4">
          ✦ Let&apos;s Connect
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Tell Us About Your <span className="text-primary">Project</span>
        </h1>
        <p className="text-text text-base lg:text-lg">
          Whether you need a full-stack software solution, a high-converting
          marketing campaign, or 3D visuals, our team is ready to help your
          brand stand out. Fill out the form below or reach us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact info cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="text-lg text-foreground font-semibold mb-2">
            Direct Channels
          </div>

          <Link
            href={CONTACT_DETAILS.whatsAppLink}
            target="_blank"
            className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 hover:border-green/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="p-3 rounded-lg bg-green/20 text-green">
              <WhatsappIcon size={28} />
            </div>
            <div>
              <div className="text-base text-foreground font-semibold">
                WhatsApp Us
              </div>
              <div className="text-xs text-text">{CONTACT_DETAILS.phoneNo}</div>
            </div>
          </Link>

          <Link
            href={CONTACT_DETAILS.mailLink}
            target="_blank"
            className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="p-3 rounded-lg bg-primary/20 text-primary">
              <MailIcon size={28} />
            </div>
            <div>
              <div className="text-base text-foreground font-semibold">
                Email Inquiry
              </div>
              <div className="text-xs text-text">{CONTACT_DETAILS.mailId}</div>
            </div>
          </Link>

          <Link
            href={CONTACT_DETAILS.addressLink}
            target="_blank"
            className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 hover:border-blue/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="p-3 rounded-lg bg-blue/20 text-blue">
              <LocationIcon size={28} />
            </div>
            <div>
              <div className="text-base text-foreground font-semibold">
                Office Location
              </div>
              <div className="text-xs text-text">{CONTACT_DETAILS.address}</div>
            </div>
          </Link>

          <div className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 mt-2">
            <div className="p-3 rounded-lg bg-chip text-text">
              <ChatIcon size={28} />
            </div>
            <div>
              <div className="text-base text-foreground font-semibold">
                Guaranteed Response
              </div>
              <div className="text-xs text-text">
                All inquiries reviewed within 24 business hours.
              </div>
            </div>
          </div>
          <div className="bg-card border border-chip/60 rounded-xl gap-4 p-4 mt-2">
            <div className="text-base text-foreground font-semibold mb-4">
              Follow Us
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href={CONTACT_DETAILS.facebookLink}
                target="_blank"
                className="flex items-center gap-2 border border-text/70 p-2 text-primary rounded-lg"
              >
                <FacebookIcon size={20} />
                <p className="text-sm text-foreground">Facebook</p>
              </Link>
              <Link
                href={CONTACT_DETAILS.instagramLink}
                target="_blank"
                className="flex items-center gap-2 border border-text/70 p-2 text-primary rounded-lg"
              >
                <InstagramIcon size={20} />
                <p className="text-sm text-foreground">Instagram</p>
              </Link>
              <Link
                href={CONTACT_DETAILS.linkedinLink}
                target="_blank"
                className="flex items-center gap-2 border border-text/70 p-2 text-primary rounded-lg"
              >
                <LinkedinIcon size={20} />
                <p className="text-sm text-foreground">LinkedIN</p>
              </Link>
              <Link
                href={CONTACT_DETAILS.twitterLink}
                target="_blank"
                className="flex items-center gap-2 border border-text/70 p-2 text-primary rounded-lg"
              >
                <XIcon size={20} />
                <p className="text-sm text-foreground">Social X</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
