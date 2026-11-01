"use client";

import {
  CircleCheckedIcon,
  EyeIcon,
  RightArrowIcon,
  TargetIcon,
  TerminalIcon,
} from "@/components/icons";
import Divider from "@/components/layout/Divider";
import { PAGES, STORY } from "@/lib/data";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Reusable Motion Variants matching the Home page
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header / Hero */}
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
        />

        <motion.div
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="px-4 py-1.5 sm:py-2 rounded-full bg-card w-fit text-primary text-xs sm:text-sm mb-6 sm:mb-8 border border-primary/70"
          >
            ✦ About Triadz
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.15] max-w-4xl"
          >
            <div className="flex justify-center flex-wrap">
              <span>We Are a Team of</span>&nbsp;
              <span className="text-primary">Creators,&nbsp;</span>
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Developers &amp; Designers.
            </span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-sm sm:text-base lg:text-lg text-text max-w-2xl text-center leading-relaxed px-2"
          >
            Triadz is a full-service digital agency built on a simple belief —
            every idea deserves to be brought to life with precision,
            creativity, and purpose. We combine technical expertise with
            creative excellence to deliver digital solutions that make a real
            difference.
          </motion.div>
        </motion.div>
      </div>

      <Divider />

      {/* Metrics / Stats Counter Grid */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {[
            { metric: "100+", label: "Projects Delivered" },
            { metric: "50+", label: "Happy Clients" },
            { metric: "5+", label: "Service Categories" },
            { metric: "2+", label: "Years of Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-center py-5 sm:py-6 px-3 sm:px-6 gap-1.5 sm:gap-2 rounded-2xl bg-card border border-chip shadow-sm hover:border-primary/40 transition-all text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl text-primary font-bold">
                {stat.metric}
              </div>
              <div className="text-xs sm:text-sm text-text font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Divider />

      {/* Story & Interactive Visual Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Animated Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate overflow-hidden w-full max-w-md lg:max-w-none mx-auto border border-primary/50 rounded-2xl flex items-center justify-center min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] shadow-lg bg-card/40"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
            />

            {/* Floating Element 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute p-3.5 sm:p-5 rounded-xl border border-secondary/50 bg-foreground/5 backdrop-blur-xl shadow-lg left-4 sm:left-8 top-6 sm:top-10"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary" />
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [165, 175, 165],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute p-3.5 sm:p-5 rounded-xl border border-secondary/50 bg-primary/10 backdrop-blur-xl shadow-lg right-4 sm:right-8 top-6 sm:top-10"
            />

            {/* Floating Element 3 */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute p-8 sm:p-10 rounded-xl border border-secondary/50 bg-primary/10 backdrop-blur-xl shadow-lg right-4 sm:right-8 bottom-16 sm:bottom-20"
            />

            {/* Center Brand Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center z-10 cursor-pointer p-4"
            >
              <div className="p-3.5 sm:p-4 rounded-2xl drop-shadow-md drop-shadow-primary bg-card mb-2 border border-chip/60">
                <Image
                  src="/logo.png"
                  alt="Triadz Solutions Logo"
                  width={64}
                  height={64}
                  className="drop-shadow-sm drop-shadow-primary"
                />
              </div>
              <div className="text-xs sm:text-sm text-primary tracking-wider font-mono font-semibold">
                TRIADZ : : KERNEL
              </div>
            </motion.div>

            {/* Bottom Terminal Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-3 sm:p-4 flex items-center justify-center text-xs text-primary gap-2 border-t border-chip/60 text-center px-4">
              <TerminalIcon size={16} />
              <span className="truncate">
                Building digital products since day one
              </span>
            </div>
          </motion.div>

          {/* Story Text Column */}
          <motion.div
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl text-primary mb-4 sm:mb-6 font-bold"
            >
              Our Story
            </motion.div>
            {STORY.map((text, index) => (
              <motion.div
                variants={fadeInUp}
                className="text-sm sm:text-base text-text mb-3.5 leading-relaxed max-w-xl"
                key={index}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Divider />

      {/* Mission & Vision Section */}
      <div className="bg-card/30">
        <motion.div
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 flex flex-col gap-10 sm:gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 flex flex-wrap justify-center gap-2"
          >
            <span>Mission</span>
            <span className="text-primary">&amp; Vision</span>
          </motion.div>

          {/* Mission / Vision Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full"
            variants={staggerContainer}
          >
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="border border-chip border-t-4 border-t-primary rounded-2xl p-6 sm:p-8 bg-card flex flex-col items-baseline shadow-sm hover:border-primary/50 transition-all"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <TargetIcon size={26} />
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-2.5 text-foreground">
                Our Mission
              </div>
              <div className="text-sm sm:text-base leading-relaxed text-text">
                To deliver high-quality, customized digital solutions that help
                businesses grow, communicate effectively, and stand out in a
                competitive world.
              </div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="border border-chip border-t-4 border-t-primary rounded-2xl p-6 sm:p-8 bg-card flex flex-col items-baseline shadow-sm hover:border-primary/50 transition-all"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <EyeIcon size={26} />
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-2.5 text-foreground">
                Our Vision
              </div>
              <div className="text-sm sm:text-base leading-relaxed text-text">
                To be the most trusted digital agency for businesses and
                creators who want both technical excellence and creative
                brilliance — all in one place.
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values 4-Column Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
            variants={staggerContainer}
          >
            {[
              {
                title: "Quality First",
                desc: "We never compromise on the quality of our work. Every pixel, every line of code, every frame matters.",
              },
              {
                title: "Client-Centric",
                desc: "Your goals are our goals. We listen carefully and tailor every solution to your specific needs.",
              },
              {
                title: "Transparency",
                desc: "Clear communication, honest timelines, and no hidden surprises — from start to finish.",
              },
              {
                title: "Continuous Growth",
                desc: "We stay ahead of trends and constantly upgrade our skills to bring you the best solutions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card p-5 sm:p-6 rounded-2xl border border-chip shadow-sm hover:border-primary/40 transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 text-primary mb-2.5">
                  <CircleCheckedIcon size={20} />
                  <p className="text-base text-foreground font-semibold">
                    {item.title}
                  </p>
                </div>
                <div className="text-xs sm:text-sm leading-relaxed text-text">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Divider />

      {/* CTA Section */}
      <motion.div
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 flex flex-wrap justify-center gap-2"
        >
          <span>Ready to Work</span>
          <span className="text-primary">With Us?</span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="text-sm sm:text-base text-text max-w-xl text-center mb-8 px-4 leading-relaxed"
        >
          Whether you have a project in mind or just want to explore what&apos;s
          possible, we&apos;d love to hear from you.
        </motion.div>

        <Link href={PAGES.CONTACT.href} className="w-full sm:w-auto">
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3.5 text-background cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto"
          >
            <span>Start a Conversation</span>
            <RightArrowIcon size={20} />
          </motion.div>
        </Link>
      </motion.div>

      <Divider />
    </>
  );
}
