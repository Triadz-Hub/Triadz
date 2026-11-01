"use client";

import { DownAngleIcon, RightArrowIcon } from "@/components/icons";
import { CONTACT_DETAILS } from "@/lib/data";
import { AnimatePresence, motion, type Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";

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

interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Development" | "Design & 3D" | "Pricing & Support";
}

const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "What kinds of digital services does Triadz Solutions offer?",
    answer:
      "We provide end-to-end digital solutions, including full-stack web and mobile application engineering, UI/UX interface design, branding, 3D interactive web experiences, photo editing, and promotional video production.",
  },
  {
    category: "General",
    question: "How does the project process usually work from start to finish?",
    answer:
      "Our workflow follows four clear stages: Discovery & Planning (analyzing goals and architecture), UI/UX & Prototyping (interactive wireframes and mockups), Core Development & Testing (iterative sprints with staging links), and Launch & Handover (deployment, documentation, and source code transfer).",
  },
  {
    category: "Development",
    question: "What tech stack do you build web and mobile applications with?",
    answer:
      "We focus on modern, scalable technologies. For web applications, we specialize in Next.js (App Router), React, TypeScript, Tailwind CSS, and Three.js. For cross-platform mobile apps, we use React Native and Expo. Backends are built with NestJS, Node.js, and modern cloud databases like PostgreSQL and Supabase.",
  },
  {
    category: "Development",
    question:
      "Will I own the complete source code and assets after completion?",
    answer:
      "Yes. Once final milestone payments are completed, 100% of the proprietary source code, database architectures, graphics, and production assets are transferred directly to your ownership with no hidden licensing fees.",
  },
  {
    category: "Design & 3D",
    question:
      "Do you create custom 3D web graphics and interactive animations?",
    answer:
      "Yes. We design and render lightweight 3D models and interactive web components using Three.js and WebGL. They are optimized for peak performance and smooth frame rates across mobile and desktop browsers.",
  },
  {
    category: "Pricing & Support",
    question: "How are project quotes and payment milestones structured?",
    answer:
      "We offer both fixed-price milestone contracts (ideal for projects with clear scopes) and flexible retainer models. Standard projects typically split payments into an initial deposit, milestone delivery reviews on staging, and final deployment handover.",
  },
  {
    category: "Pricing & Support",
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Every project includes a standard 30-day post-launch warranty covering bug fixes and adjustments at zero extra charge. We also provide ongoing maintenance agreements for server management, feature updates, and performance tuning.",
  },
  {
    category: "General",
    question: "How quickly can we kick off a new project?",
    answer:
      "Once you submit your requirements via our contact form or WhatsApp, we review the brief and respond within 24 hours. We then schedule a quick discovery call and can typically commence development within 3 to 5 business days.",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = [
    "All",
    "General",
    "Development",
    "Design & 3D",
    "Pricing & Support",
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((item) => item.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-80 py-16 sm:py-24">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center text-center mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          variants={fadeInUp}
          className="mb-4 w-fit rounded-full border border-primary/70 bg-card px-4 py-1.5 text-primary text-xs sm:text-sm font-medium"
        >
          ✦ Got Questions?
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-base text-text max-w-xl leading-relaxed"
        >
          Everything you need to know about our engineering standards, creative
          design workflow, timelines, and post-launch guarantees.
        </motion.p>

        {/* Filter Pills */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-primary text-background font-semibold border-primary shadow-sm"
                    : "bg-card border-chip/60 text-text hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Accordion List */}
      <motion.div className="max-w-3xl mx-auto flex flex-col gap-3.5" layout>
        <AnimatePresence mode="sync">
          {filteredFaqs.map((faq, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-chip/60 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors hover:bg-background/40"
                >
                  <span className="text-sm sm:text-base font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-primary shrink-0"
                  >
                    <DownAngleIcon size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-text leading-relaxed border-t border-chip/40 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Still Have Questions Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-card/60 border border-chip/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div>
          <div className="text-base font-semibold text-foreground">
            Still have questions?
          </div>
          <div className="text-xs sm:text-sm text-text mt-0.5">
            Can't find what you're looking for? Reach out directly via email or
            WhatsApp.
          </div>
        </div>
        <Link
          href={CONTACT_DETAILS.mailLink}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-background bg-primary rounded-lg px-4 py-2.5 shrink-0 hover:shadow-md hover:shadow-primary/20 transition-all"
        >
          <span>Ask Directly</span>
          <RightArrowIcon size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
