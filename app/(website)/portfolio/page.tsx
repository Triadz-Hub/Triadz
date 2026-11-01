"use client";

import { RightArrowIcon, StarFilledIcon } from "@/components/icons";
import Divider from "@/components/layout/Divider";
import { PAGES, WORKS } from "@/lib/data";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Reusable Motion Variants matching the Home, About, and Services pages
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

export default function PortfolioPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative isolate overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
        />

        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-12 pt-32 lg:px-12 lg:pt-40"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 w-fit rounded-full border border-primary/70 bg-card px-4 py-2 text-primary text-sm"
          >
            ✦ Our Work
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="mb-4 flex flex-wrap justify-center gap-x-3 text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            <span>Our</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="mb-10 max-w-2xl text-center text-base leading-7 text-text sm:text-lg"
          >
            A showcase of projects we've delivered — from custom software and
            stunning websites to bold graphic designs, polished visuals, and
            immersive 3D experiences.
          </motion.p>
        </motion.div>
      </section>

      <Divider />

      {/* Metrics / Stats Ribbon */}
      <section className="px-6 py-12 lg:px-12 lg:py-10 bg-card">
        <motion.div
          className="grid grid-cols-4 gap-12 lg:px-80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col flex-1 items-center justify-center gap-2"
          >
            <div className="text-3xl text-primary font-semibold">100+</div>
            <div className="text-base text-text text-center">
              Projects Delivered
            </div>
          </motion.div>

          <motion.div
            variants={cardVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col flex-1 items-center justify-center gap-2"
          >
            <div className="text-3xl text-primary font-semibold">50+</div>
            <div className="text-base text-text text-center">Happy Clients</div>
          </motion.div>

          <motion.div
            variants={cardVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col flex-1 items-center justify-center gap-2"
          >
            <div className="text-3xl text-primary font-semibold">5+</div>
            <div className="text-base text-text text-center">
              Service Categories
            </div>
          </motion.div>

          <motion.div
            variants={cardVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col flex-1 items-center justify-center gap-2"
          >
            <div className="text-3xl text-primary font-semibold flex items-center gap-1">
              5<StarFilledIcon size={24} />
            </div>
            <div className="text-base text-text text-center">
              Average Rating
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Works Gallery Grid */}
      <section className="px-6 py-12 lg:px-80 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {Object.values(WORKS).map((item, index) => {
            return (
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="border border-text/70 rounded-lg overflow-hidden flex flex-col group shadow-sm hover:shadow-lg transition-shadow duration-300"
                key={index.toString()}
              >
                <div className="overflow-hidden aspect-video relative bg-card">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-card/70 backdrop-blur-sm p-4 flex-1 flex flex-col">
                  <div className="px-2.5 py-1 text-xs font-semibold text-secondary bg-primary/70 w-fit rounded-full mb-2">
                    {item.category}
                  </div>
                  <div className="text-base text-foreground font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-text line-clamp-2 mb-3">
                    {item.description}
                  </div>
                  <div className="flex items-center flex-wrap mt-auto gap-1.5 pt-2">
                    {item.technologies.split(",").map((tech, inx) => {
                      return (
                        <div
                          className="text-xs text-text py-0.5 px-2.5 rounded-full border border-text/30 bg-background/80"
                          key={inx.toString()}
                        >
                          {tech.trim()}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <Divider />

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-20 flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center w-full"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-foreground sm:text-4xl flex flex-wrap justify-center mb-4"
          >
            <p>Have a Project</p>&nbsp;
            <p className="text-primary">in Mind?</p>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="text-base text-text mb-8 max-w-xl"
          >
            Let's create something exceptional together. Share your idea and
            we'll get back to you within 24 hours.
          </motion.div>

          <Link href={PAGES.CONTACT.href} className="w-full sm:w-auto">
            <motion.button
              variants={fadeInUp}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-base font-semibold text-background bg-primary rounded-lg px-6 py-3 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
            >
              <p>Start a Project</p>
              <RightArrowIcon />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Divider />
    </>
  );
}
