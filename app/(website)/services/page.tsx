"use client";

import Divider from "@/components/layout/Divider";
import { PAGES, SERVICES } from "@/lib/data";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
  CircleCheckedIcon,
  DownAngleIcon,
  RightArrowIcon,
} from "@/components/icons";
import Steps from "@/components/layout/Steps";
import Link from "next/link";

// Reusable Motion Variants matching the Home & About pages
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

export default function ServicesPage() {
  const services = useMemo(() => Object.values(SERVICES), []);
  const [service, setService] = useState(SERVICES.SOFTWARE_DEVELOPMENT);

  useEffect(() => {
    const interval = setInterval(() => {
      setService((prev) => {
        const index = services.findIndex((item) => item.value === prev.value);
        return index >= 0 && index < services.length - 1
          ? services[index + 1]
          : services[0];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [services]);

  const Icon = service.Icon;
  const ThreeD = service.ThreeD;

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
            ✦ What We Do
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="mb-4 flex flex-wrap justify-center gap-x-3 text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            <span>Our</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-10 max-w-2xl text-center text-base leading-7 text-text sm:text-lg"
          >
            From software applications to stunning visual designs, we offer a
            complete range of digital services to help your business grow and
            stand out.
          </motion.p>

          {/* Service selector chips */}
          <motion.div
            variants={fadeInUp}
            className="flex w-full max-w-full flex-wrap justify-center gap-3"
          >
            {services.map((item) => {
              const ItemIcon = item.Icon;
              const isSelected = item.value === service.value;

              return (
                <motion.button
                  type="button"
                  key={item.value}
                  onClick={() => setService(item)}
                  aria-pressed={isSelected}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 transition-colors duration-300 ease-in-out cursor-pointer ${
                    isSelected
                      ? "border-secondary/70 bg-primary text-background shadow-lg shadow-primary/20"
                      : `border-text/70 bg-${item.color}/60 text-${item.color} hover:border-primary/40 hover:bg-card`
                  }`}
                >
                  <ItemIcon size={22} />
                  <span
                    className={`whitespace-nowrap text-sm sm:text-base ${
                      isSelected
                        ? "text-background font-semibold"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <Divider />

      {/* Animated active service details */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:pb-10 lg:pt-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={service.value}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-1 gap-10 md:grid-cols-2"
          >
            {/* Left: Service information */}
            <div className="flex flex-col items-start gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-primary"
              >
                <Icon size={20} />
                <span className="text-base font-medium">{service.label}</span>
              </motion.div>

              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                {service.title}
              </h2>

              {"body" in service && typeof service.description === "string" && (
                <p className="max-w-xl leading-7 text-text text-base">
                  {service.body}
                </p>
              )}

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-primary rounded-lg px-5 py-3 text-base font-semibold text-background cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-shadow"
              >
                <p>Get Quote</p>
                <RightArrowIcon size={24} />
              </motion.button>
            </div>

            {/* Right: Interactive 3D visual container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-8 backdrop-blur-xl shadow-lg shadow-black/10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,181,0,0.12),transparent_65%)]"
              />
              <ThreeD />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {services.map((item) => {
            const isSelected = item.value === service.value;

            return (
              <button
                type="button"
                key={item.value}
                aria-label={`Show ${item.label}`}
                aria-pressed={isSelected}
                onClick={() => setService(item)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>

        {/* What's Included */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.div variants={fadeInUp} className="text-2xl font-bold mb-8">
            What's Included
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={service.value}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {service.includes.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-card border border-chip flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between p-4 border-b border-text/60 text-text">
                    <div className="flex gap-2 items-center text-primary">
                      <CircleCheckedIcon size={20} />
                      <div className="text-base text-foreground font-semibold">
                        {item.label}
                      </div>
                    </div>
                    <DownAngleIcon size={12} />
                  </div>
                  <div className="text-sm text-text p-4 leading-relaxed">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-2xl font-bold mb-8">Our Process</div>
          <Steps steps={service.process} />
        </motion.div>
      </section>

      {/* All Service Categories Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:pt-10 lg:pb-20 flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col items-center w-full"
        >
          <motion.div
            variants={fadeInUp}
            className="text-4xl font-bold mt-16 mb-2 flex flex-wrap justify-center"
          >
            <p>All</p>&nbsp;
            <p className="text-primary">Service Categories</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-base text-text mb-8">
            Click any category to explore in detail
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            variants={staggerContainer}
          >
            {Object.values(SERVICES).map((item, index) => {
              const ServiceIcon = item.Icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  onClick={() => {
                    setService(item);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className={`p-5 bg-${item.color}/60 border border-${item.color}/90 rounded-xl flex flex-col gap-4 cursor-pointer shadow-sm hover:shadow-lg transition-all`}
                >
                  <div
                    className={`p-2.5 w-fit rounded-lg bg-${item.color}/90 text-${item.color}`}
                  >
                    <ServiceIcon size={24} />
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    {item.label}
                  </div>
                  <div className="text-sm text-text leading-relaxed">
                    {item.title}
                  </div>
                  <div
                    className={`text-${item.color} text-sm flex items-center gap-2 font-medium mt-auto pt-2`}
                  >
                    <p>View Details</p>
                    <RightArrowIcon size={20} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
            <p>Not Sure Which</p>&nbsp;
            <p className="text-primary">Service You Need?</p>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="text-base text-text mb-8 max-w-xl"
          >
            Tell us about your project and we'll recommend the best approach for
            your goals and budget.
          </motion.div>

          <Link href={PAGES.CONTACT.href} className="w-full sm:w-auto">
            <motion.button
              variants={fadeInUp}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-base font-semibold text-background bg-primary rounded-lg px-6 py-3 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
            >
              <p>Get a Free Consultation</p>
              <RightArrowIcon size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Divider />
    </>
  );
}
