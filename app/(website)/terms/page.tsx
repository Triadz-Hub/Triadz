"use client";

import Divider from "@/components/layout/Divider";
import { MailIcon, RightArrowIcon } from "@/components/icons";
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
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Services & Scope of Work" },
  { id: "ip-rights", title: "3. Intellectual Property Rights" },
  { id: "client-obligations", title: "4. Client Obligations" },
  { id: "payments-invoicing", title: "5. Payments, Fees & Taxes" },
  { id: "warranties-support", title: "6. Warranties & Bug Fixes" },
  { id: "liability", title: "7. Limitation of Liability" },
  { id: "termination", title: "8. Termination & Suspension" },
  { id: "governing-law", title: "9. Governing Law & Jurisdiction" },
  { id: "contact", title: "10. Contact Information" },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");

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
            ✦ Legal Agreement
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Terms & <span className="text-primary">Conditions</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-text max-w-2xl leading-relaxed"
          >
            Please read these terms carefully before engaging our digital
            solutions, applications, or consulting services.
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
          {/* Quick Navigation Sidebar (Sticky on Desktop) */}
          <motion.aside
            className="lg:col-span-4 lg:sticky lg:top-28 bg-card border border-chip/60 rounded-2xl p-5 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-base font-semibold text-foreground mb-4 flex items-center justify-between">
              <span>Table of Contents</span>
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
                Have legal questions?
              </div>
              <Link
                href={CONTACT_DETAILS.mailLink}
                className="flex items-center gap-2 text-xs text-primary font-medium hover:underline"
              >
                <MailIcon size={16} />
                <span>legal@triadz.in</span>
              </Link>
            </div>
          </motion.aside>

          {/* Legal Text Content Body */}
          <motion.div
            className="lg:col-span-8 flex flex-col gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* 1. Acceptance */}
            <motion.div
              id="acceptance"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  By accessing, browsing, or contracting services from{" "}
                  <strong className="text-foreground">Triadz Solutions</strong>{" "}
                  ("Company," "we," "us," or "our"), you ("Client," "you," or
                  "your") acknowledge that you have read, understood, and agreed
                  to be bound by these Terms and Conditions.
                </p>
                <p>
                  If you are entering into this agreement on behalf of a company
                  or other legal entity, you represent that you have the full
                  authority to bind that entity to these terms.
                </p>
              </div>
            </motion.div>

            {/* 2. Services */}
            <motion.div
              id="services"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                2. Services & Scope of Work
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  Triadz Solutions provides professional software engineering
                  (web, mobile, backend), UI/UX design, 3D visualization, video
                  generation, and digital marketing consulting services.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-text pl-2">
                  <li>
                    Specific milestones, deliverables, timelines, and budgets
                    are documented in mutually agreed Statement of Work (SOW)
                    documents or service contracts.
                  </li>
                  <li>
                    Any modifications or additions requested outside the agreed
                    SOW will be evaluated as change requests and quoted under
                    additional billable hours or fixed-fee amendments.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 3. IP Rights */}
            <motion.div
              id="ip-rights"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                3. Intellectual Property Rights
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  <strong className="text-foreground">
                    Client Deliverables:
                  </strong>{" "}
                  Upon receipt of 100% full and final payment, all bespoke
                  application source code, visual designs, assets, and
                  documentation created explicitly for the Client shall transfer
                  to the Client's ownership.
                </p>
                <p>
                  <strong className="text-foreground">
                    Pre-existing Materials & Tooling:
                  </strong>{" "}
                  Triadz Solutions retains all rights, titles, and interests in
                  and to pre-existing code libraries, starter kits, development
                  templates, proprietary algorithms, and open-source frameworks
                  utilized during development. Clients receive an irrevocable,
                  royalty-free license to use these embedded components as part
                  of their deliverable.
                </p>
                <p>
                  <strong className="text-foreground">
                    Portfolio Showcase:
                  </strong>{" "}
                  Unless explicitly restricted via a signed Non-Disclosure
                  Agreement (NDA), Triadz Solutions reserves the right to
                  display finished work, screenshots, and publicly accessible
                  case studies in our portfolio and marketing material.
                </p>
              </div>
            </motion.div>

            {/* 4. Client Obligations */}
            <motion.div
              id="client-obligations"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                4. Client Obligations
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>The Client agrees to:</p>
                <ul className="list-disc list-inside space-y-2 text-text pl-2">
                  <li>
                    Provide timely feedback, approvals, copy, API keys,
                    credentials, and brand assets necessary to keep development
                    milestones on schedule.
                  </li>
                  <li>
                    Ensure that all content, logos, trademarks, and third-party
                    media supplied to Triadz Solutions do not infringe on any
                    third-party intellectual property or copyright.
                  </li>
                  <li>
                    Appoint a designated point of contact responsible for making
                    prompt project decisions.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 5. Payments */}
            <motion.div
              id="payments-invoicing"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                5. Payments, Fees & Taxes
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  Invoices are issued according to the payment schedules defined
                  in the SOW (e.g., upfront retainer, milestone completion, or
                  monthly recurring cycles).
                </p>
                <p>
                  All payments are due within the standard net term stated on
                  invoices (typically 7 to 14 days). Late payments may result in
                  the temporary suspension of ongoing deployment, staging server
                  access, or milestone delivery until the account is settled in
                  good standing.
                </p>
              </div>
            </motion.div>

            {/* 6. Warranties */}
            <motion.div
              id="warranties-support"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                6. Warranties & Bug Fixes
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  We provide a{" "}
                  <strong className="text-foreground">
                    30-day post-launch warranty period
                  </strong>{" "}
                  covering critical bugs or deviations from the agreed
                  specifications at no extra charge.
                </p>
                <p>
                  This warranty does not cover issues introduced by subsequent
                  Client modifications, third-party hosting updates, breaking
                  changes in external third-party APIs, or requests outside the
                  agreed scope. Ongoing support is handled under separate
                  Service Level Agreements (SLAs).
                </p>
              </div>
            </motion.div>

            {/* 7. Limitation of Liability */}
            <motion.div
              id="liability"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  To the maximum extent permitted by applicable law, Triadz
                  Solutions shall not be liable for any indirect, incidental,
                  punitive, or consequential damages, including loss of profits,
                  data corruption, business interruption, or server downtime
                  resulting from the use or inability to use the deliverables.
                </p>
                <p>
                  In all events, our total cumulative liability under any claim
                  arising from a specific project shall not exceed the total
                  fees received by Triadz Solutions for that particular project
                  during the 3 months preceding the event.
                </p>
              </div>
            </motion.div>

            {/* 8. Termination */}
            <motion.div
              id="termination"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                8. Termination & Suspension
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  Either party may terminate an active project agreement by
                  providing written notice if the other party breaches any
                  material term and fails to cure such breach within 14 calendar
                  days of receiving notice.
                </p>
                <p>
                  Upon early termination, the Client shall pay for all hours
                  worked and completed milestones up to the date of termination,
                  and Triadz Solutions will deliver all work-in-progress
                  materials completed up to that point.
                </p>
              </div>
            </motion.div>

            {/* 9. Governing Law */}
            <motion.div
              id="governing-law"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                9. Governing Law & Jurisdiction
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of India, without regard to
                  conflict of law principles.
                </p>
                <p>
                  Any dispute, controversy, or claim arising out of or relating
                  to these terms shall be settled through amicable negotiation
                  first, and if unresolved, submitted to the competent courts
                  having jurisdiction in Tamil Nadu, India.
                </p>
              </div>
            </motion.div>

            {/* 10. Contact */}
            <motion.div
              id="contact"
              variants={fadeInUp}
              className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-card border border-chip/60"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                10. Contact Information
              </h2>
              <div className="text-sm sm:text-base text-text leading-relaxed space-y-3">
                <p>
                  If you have any questions or require clarifications regarding
                  these Terms and Conditions, please reach out to us:
                </p>
                <div className="mt-4 p-4 rounded-xl bg-background border border-chip/60 space-y-1 text-sm">
                  <div className="font-semibold text-foreground">
                    Triadz Solutions
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
            Ready to Build Your Next Digital Product?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-text mb-6 max-w-md"
          >
            Review our services or consult with our engineering team today.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href={PAGES.CONTACT.href}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-background bg-primary rounded-lg px-6 py-3 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <RightArrowIcon size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Divider />
    </>
  );
}
