"use client";

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
import FAQSection from "@/components/layout/FaqSession";
import { CONTACT_DETAILS } from "@/lib/data";
import { motion, type Variants } from "motion/react";
import Link from "next/link";

// Shared Motion Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <div className="px-6 lg:px-20 xl:px-80 pt-36 pb-24 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="max-w-3xl mb-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeInUp}
          className="px-4 py-1.5 rounded-full bg-card w-fit text-primary text-sm font-medium mb-4 border border-primary/40"
        >
          ✦ Let&apos;s Connect
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          Tell Us About Your <span className="text-primary">Project</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-text text-base lg:text-lg leading-relaxed"
        >
          Whether you need a full-stack software solution, a high-converting
          marketing campaign, or 3D visuals, our team is ready to help your
          brand stand out. Fill out the form below or reach us directly.
        </motion.p>
      </motion.div>

      {/* Main Grid: Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className="lg:col-span-4 flex flex-col gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="text-lg text-foreground font-semibold mb-2"
          >
            Direct Channels
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div variants={cardVariant}>
            <Link
              href={CONTACT_DETAILS.whatsAppLink}
              target="_blank"
              className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 hover:border-green/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green/20 text-green shrink-0">
                  <WhatsappIcon size={28} />
                </div>
                <div>
                  <div className="text-base text-foreground font-semibold">
                    WhatsApp Us
                  </div>
                  <div className="text-xs text-text">
                    {CONTACT_DETAILS.phoneNo}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Email Card */}
          <motion.div variants={cardVariant}>
            <Link
              href={CONTACT_DETAILS.mailLink}
              target="_blank"
              className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 hover:border-primary/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary shrink-0">
                  <MailIcon size={28} />
                </div>
                <div>
                  <div className="text-base text-foreground font-semibold">
                    Email Inquiry
                  </div>
                  <div className="text-xs text-text">
                    {CONTACT_DETAILS.mailId}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Office Location Card */}
          <motion.div variants={cardVariant}>
            <Link
              href={CONTACT_DETAILS.addressLink}
              target="_blank"
              className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 hover:border-blue/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue/20 text-blue shrink-0">
                  <LocationIcon size={28} />
                </div>
                <div>
                  <div className="text-base text-foreground font-semibold">
                    Office Location
                  </div>
                  <div className="text-xs text-text">
                    {CONTACT_DETAILS.address}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Guaranteed Response Banner */}
          <motion.div
            variants={cardVariant}
            className="bg-card border border-chip/60 rounded-xl flex items-center gap-4 p-4 mt-2 shadow-sm"
          >
            <div className="p-3 rounded-lg bg-chip text-text shrink-0">
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
          </motion.div>

          {/* Follow Us Grid */}
          <motion.div
            variants={cardVariant}
            className="bg-card border border-chip/60 rounded-xl p-4 mt-2 shadow-sm"
          >
            <div className="text-base text-foreground font-semibold mb-4">
              Follow Us
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  href: CONTACT_DETAILS.facebookLink,
                  Icon: FacebookIcon,
                  label: "Facebook",
                },
                {
                  href: CONTACT_DETAILS.instagramLink,
                  Icon: InstagramIcon,
                  label: "Instagram",
                },
                {
                  href: CONTACT_DETAILS.linkedinLink,
                  Icon: LinkedinIcon,
                  label: "LinkedIn",
                },
                {
                  href: CONTACT_DETAILS.twitterLink,
                  Icon: XIcon,
                  label: "Social X",
                },
              ].map(({ href, Icon, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  className="flex items-center gap-2 border border-text/40 hover:border-primary p-2 text-primary rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5"
                >
                  <Icon size={20} />
                  <p className="text-sm text-foreground">{label}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <FAQSection />
    </div>
  );
}
