"use client";

import Divider from "@/components/layout/Divider";
import {
  MailIcon,
  RightArrowIcon,
  CircleCheckedIcon,
} from "@/components/icons";
import { CONTACT_DETAILS, PAGES } from "@/lib/data";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";

// Shared Motion Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const sections = [
  { id: "overview", title: "1. Overview & Commitment" },
  { id: "data-collection", title: "2. Information We Collect" },
  { id: "data-usage", title: "3. How We Use Your Data" },
  { id: "cookies", title: "4. Cookies & Analytics" },
  { id: "sharing", title: "5. Information Sharing & Third Parties" },
  { id: "storage-security", title: "6. Data Security & Storage" },
  { id: "client-rights", title: "7. Your Rights & Choices" },
  { id: "retention", title: "8. Data Retention" },
  { id: "policy-updates", title: "9. Updates to This Policy" },
  { id: "contact-privacy", title: "10. Contact Privacy Officer" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Header / Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
        />

        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-32 sm:pt-36 lg:pt-40 pb-12 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 w-fit rounded-full border border-primary/70 bg-card px-4 py-1.5 text-primary text-xs sm:text-sm font-medium"
          >
            ✦ Transparency & Trust
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Privacy <span className="text-primary">Policy</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-text max-w-2xl leading-relaxed"
          >
            We take data protection seriously. This policy explains how Triadz
            Solutions handles your personal and business information when you
            use our websites, apps, and development services.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-text"
          >
            <span className="rounded-md bg-card border border-chip/60 px-2.5 py-1 text-foreground">
              Effective Date: January 1, 2026
            </span>
            <span className="rounded-md bg-card border border-chip/60 px-2.5 py-1 text-foreground">
              Last Updated: October 2026
            </span>
          </motion.div>
        </motion.div>
      </section>

      <Divider />

      {/* Main Content Layout */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-80 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Table of Contents Sticky Sidebar */}
          <motion.aside
            className="lg:col-span-4 lg:sticky lg:top-28 bg-card border border-chip/60 rounded-2xl p-5 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-base font-semibold text-foreground mb-4 flex items-center justify-between">
              <span>Privacy Sections</span>
              <span className="text-xs text-primary font-mono font-normal">
                {sections.length} Clauses
              </span>
            </div>
            <nav className="flex flex-col gap-1.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-xs sm:text-sm px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeSection === section.id
                      ? "bg-primary text-background font-semibold shadow-sm"
                      : "text-text hover:text-foreground hover:bg-background/80"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-chip/50">
              <div className="text-xs text-text mb-2">
                Privacy inquiries & requests:
              </div>
              <Link
                href={CONTACT_DETAILS.mailLink}
                className="flex items-center gap-2 text-xs text-primary font-medium hover:underline"
              >
                <MailIcon size={16} />
                <span>privacy@triadz.in</span>
              </Link>
            </div>
          </motion.aside>

          {/* Policy Clauses Body */}
          <motion.div
            className="lg:col-span-8 flex flex-col gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* 1. Overview */}
            <motion.div
              id="overview"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                1. Overview & Commitment
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  At{" "}
                  <strong className="text-foreground">Triadz Solutions</strong>{" "}
                  ("Triadz," "we," "us," or "our"), safeguarding your personal
                  and business data is central to our engineering integrity.
                </p>
                <p>
                  This Privacy Policy applies across our primary portal, client
                  dashboards, API services, and any software projects or
                  consultancy engagements contracted through us.
                </p>
              </div>
            </motion.div>

            {/* 2. Information We Collect */}
            <motion.div
              id="data-collection"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-4">
                <p>We collect information in three ways:</p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-background/60 border border-chip/50">
                    <h3 className="font-semibold text-foreground mb-1">
                      A. Directly Provided by You
                    </h3>
                    <p className="text-xs sm:text-sm text-text">
                      Contact details (name, email address, phone number,
                      company name), project requirements, design briefs,
                      credentials, and payment billing details submitted via
                      inquiries or contracts.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/60 border border-chip/50">
                    <h3 className="font-semibold text-foreground mb-1">
                      B. Automatically Collected Technical Data
                    </h3>
                    <p className="text-xs sm:text-sm text-text">
                      IP address, device metadata, operating system, browser
                      type, referral URLs, page engagement metrics, and session
                      timings captured during site navigation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/60 border border-chip/50">
                    <h3 className="font-semibold text-foreground mb-1">
                      C. Project & Engineering Credentials
                    </h3>
                    <p className="text-xs sm:text-sm text-text">
                      Staging server credentials, repository accesses, or
                      third-party service API keys provided strictly under
                      mutual engagement for implementation purposes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Data Usage */}
            <motion.div
              id="data-usage"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Data
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>We use your information exclusively to:</p>
                <ul className="space-y-2 text-text pl-1">
                  {[
                    "Deliver, architect, and optimize contracted software, designs, and digital campaigns.",
                    "Process milestone invoices, tax receipts, and transactional billing notifications.",
                    "Respond to support tickets, consultations, and quote inquiries within 24 hours.",
                    "Ensure platform security, prevent unauthorized server access, and resolve errors.",
                    "Comply with applicable legal requirements and Indian corporate tax accounting rules.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="text-primary mt-1 shrink-0">
                        <CircleCheckedIcon size={16} />
                      </div>
                      <span className="text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 4. Cookies & Tracking */}
            <motion.div
              id="cookies"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                4. Cookies & Analytics
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  We utilize lightweight essential cookies and
                  privacy-respecting analytics to record user navigation,
                  measure page load performance, and optimize UI interactions.
                </p>
                <p>
                  We do not execute invasive cross-site tracking or harvest your
                  information for behavioral advertising networks. You can
                  decline or erase cookies at any time via your browser
                  settings.
                </p>
              </div>
            </motion.div>

            {/* 5. Information Sharing */}
            <motion.div
              id="sharing"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                5. Information Sharing & Third Parties
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  <strong className="text-foreground">
                    We never sell, rent, or trade your personal data.
                  </strong>{" "}
                  Information is shared only with verified service providers
                  assisting our core operations, including:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-text pl-2 text-xs sm:text-sm">
                  <li>
                    Cloud infrastructure providers (AWS, Vercel, Supabase,
                    Google Cloud).
                  </li>
                  <li>Transactional email and SMTP dispatch services.</li>
                  <li>
                    Authorized payment gateways handling encrypted,
                    PCI-compliant billing.
                  </li>
                </ul>
                <p className="text-xs sm:text-sm">
                  All service partners are bound by strict confidentiality and
                  data protection standards.
                </p>
              </div>
            </motion.div>

            {/* 6. Security & Storage */}
            <motion.div
              id="storage-security"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                6. Data Security & Storage
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  We implement enterprise-grade security protocols, including
                  TLS/SSL encryption for data in transit, encrypted storage
                  buckets for project credentials, and role-based access control
                  (RBAC).
                </p>
                <p>
                  Client staging credentials and API keys are isolated to
                  project scope and rotated or deleted post-launch following the
                  completion of service warranties.
                </p>
              </div>
            </motion.div>

            {/* 7. Client Rights */}
            <motion.div
              id="client-rights"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                7. Your Rights & Choices
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  Under applicable data privacy regulations, you have the right
                  to:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-text pl-2 text-xs sm:text-sm">
                  <li>
                    Request access to the personal data we maintain about you.
                  </li>
                  <li>
                    Request correction of inaccurate or incomplete records.
                  </li>
                  <li>
                    Request permanent deletion of your contact records and
                    design assets (subject to statutory accounting and tax
                    retention limits).
                  </li>
                  <li>
                    Revoke consent for communications or newsletter updates at
                    any time.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 8. Data Retention */}
            <motion.div
              id="retention"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                8. Data Retention
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  We retain contact and invoice records for as long as necessary
                  to satisfy contractual obligations and tax reporting
                  regulations. General inquiry messages through the contact form
                  are pruned periodically after 12 months of inactivity.
                </p>
              </div>
            </motion.div>

            {/* 9. Policy Updates */}
            <motion.div
              id="policy-updates"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                9. Updates to This Policy
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  We may revise this Privacy Policy periodically to reflect
                  technological advancements, legal amendments, or operational
                  adjustments. The updated revision date will always be visible
                  at the top of this document.
                </p>
              </div>
            </motion.div>

            {/* 10. Contact */}
            <motion.div
              id="contact-privacy"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                10. Contact Privacy Officer
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  For data requests, corrections, or questions concerning our
                  privacy practices, contact our Data Protection Officer:
                </p>
                <div className="mt-4 p-4 rounded-xl bg-background border border-chip/60 space-y-1 text-sm">
                  <div className="font-semibold text-foreground">
                    Triadz Solutions — Privacy Desk
                  </div>
                  <div className="text-text">
                    Email: {CONTACT_DETAILS.mailId}
                  </div>
                  <div className="text-text">
                    Phone: {CONTACT_DETAILS.phoneNo}
                  </div>
                  <div className="text-text">
                    Location: {CONTACT_DETAILS.address}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-16 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3"
          >
            Have a Specific Question?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-text mb-6 max-w-md"
          >
            We are always here to provide clarity about how we build and protect
            your projects.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href={PAGES.CONTACT.href}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-background bg-primary rounded-lg px-6 py-3 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <span>Contact Us</span>
              <RightArrowIcon size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Divider />
    </>
  );
}
