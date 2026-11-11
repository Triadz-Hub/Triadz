"use client";

import ContactForm from "@/components/forms/ContactForm";
import {
  CanvaIcon,
  ChatIcon,
  CircleCheckedIcon,
  DownAngleIcon,
  FigmaIcon,
  MailIcon,
  PenpotIcon,
  RightArrowIcon,
  SketchIcon,
  StarFilledIcon,
  WhatsappIcon,
} from "@/components/icons";
import Divider from "@/components/layout/Divider";
import Steps from "@/components/layout/Steps";
import {
  CONTACT_DETAILS,
  PAGES,
  REVIEWS,
  SERVICES,
  SKILLS,
  steps,
  WORKS,
} from "@/lib/data";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Animation Variants
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
        />
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 items-center">
            {/* Hero Content Left */}
            <motion.div
              className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeInUp}
                className="px-4 py-1.5 sm:py-2 rounded-full bg-card w-fit text-primary text-xs sm:text-sm mb-2 sm:mb-4 border border-primary/70"
              >
                ✦ Digital Agency
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-4 leading-[1.15]"
              >
                <p>We Build Digital Products & Create</p>
                <p className="text-primary">Extraordinary</p>
                <p className="text-secondary">Designs.</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="text-sm sm:text-base text-text mb-6 sm:mb-8 max-w-xl leading-relaxed"
              >
                Need a website, mobile application, brand design, photo editing,
                video production, or 3D visualization? We provide creative and
                technical solutions tailored to your ideas and business goals.
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto"
              >
                <Link href={PAGES.CONTACT.href} className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3.5 text-background cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 w-full"
                  >
                    <span>Get Free Quote</span>
                    <RightArrowIcon />
                  </motion.div>
                </Link>
                <Link href={PAGES.SERVICES.href} className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border rounded-lg border-text/60 text-foreground px-6 py-3.5 cursor-pointer hover:border-primary hover:text-primary transition-all duration-300 w-full text-center font-medium"
                  >
                    View Our Services
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-foreground"
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-card shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Triadz Solution Logo"
                    width={26}
                    height={26}
                  />
                </div>
                <div>Architected with precision • Scaled worldwide</div>
              </motion.div>
            </motion.div>

            {/* Hero Visual Right with Floating Cards */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center mt-4 sm:mt-6 lg:mt-0">
              {/* Central ambient glow */}
              <div className="absolute w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/10 to-cyan/10 blur-3xl pointer-events-none" />

              {/* Terminal snippet */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-1 sm:top-6 left-1 sm:left-4 border border-primary/40 p-2.5 sm:p-4 pr-6 sm:pr-10 rounded-2xl bg-card/95 backdrop-blur-md shadow-xl text-xs sm:text-sm z-10"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-text flex">
                  const app = &nbsp;<p className="text-primary">triadz</p>();
                </div>
                <div className="text-text flex">
                  await app.<p className="text-secondary">build</p>();
                </div>
                <div className="text-primary font-medium">
                  {"// ✓ Deployed"}
                </div>
              </motion.div>

              {/* Design tools badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, 8, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.2 },
                  scale: { duration: 0.6, delay: 0.2 },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
                className="absolute bottom-20 sm:bottom-24 left-1 sm:left-4 border border-secondary/40 p-2.5 sm:p-4 rounded-2xl bg-card/95 backdrop-blur-md shadow-xl z-10"
              >
                <div className="text-xs sm:text-sm text-text mb-1.5 sm:mb-2">
                  Design Tools
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="p-1 sm:p-1.5 border border-cyan bg-cyan/30 rounded">
                    <div className="p-1 rounded bg-cyan text-background">
                      <FigmaIcon size={12} />
                    </div>
                  </div>
                  <div className="p-1 sm:p-1.5 text-purple border border-purple bg-purple/30 rounded">
                    <div className="p-1 rounded bg-purple text-background">
                      <SketchIcon size={12} />
                    </div>
                  </div>
                  <div className="p-1 sm:p-1.5 text-pink border border-pink bg-pink/30 rounded">
                    <div className="p-1 rounded bg-pink text-background">
                      <CanvaIcon size={12} />
                    </div>
                  </div>
                  <div className="p-1 sm:p-1.5 text-yellow border border-yellow bg-yellow/30 rounded">
                    <div className="p-1 rounded bg-yellow text-background">
                      <PenpotIcon size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social proof badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.35 },
                  scale: { duration: 0.6, delay: 0.35 },
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                className="absolute bottom-2 sm:bottom-4 right-1 sm:right-4 border border-primary/40 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-card/95 backdrop-blur-md shadow-xl z-10"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-2">
                    {REVIEWS.map((user, index) => (
                      <div
                        key={index}
                        className={`relative flex size-5 sm:size-6 items-center justify-center rounded-full bg-${user.color} text-[10px] sm:text-xs font-semibold text-background`}
                      >
                        {user.clientName.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <div className="text-foreground text-[11px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
                    100+ Projects Delivered
                  </div>
                </div>
              </motion.div>

              {/* Mock layout card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.15 },
                  scale: { duration: 0.6, delay: 0.15 },
                  y: {
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}
                className="absolute top-8 sm:top-14 right-2 sm:right-6 border border-primary/30 rounded-2xl p-2 sm:p-2.5 bg-card/90 backdrop-blur-md flex flex-col shadow-xl z-0"
              >
                <div className="w-8 h-1 bg-text rounded-full mb-1.5 self-center" />
                <div className="h-16 sm:h-24 w-14 sm:w-20 bg-primary/80 rounded mb-1.5" />
                <div className="h-1 w-12 sm:w-16 rounded bg-text/20 mb-1" />
                <div className="h-1 w-8 sm:w-10 rounded bg-text/20 mb-1" />
                <div className="h-4 sm:h-5 w-14 sm:w-20 bg-primary/20 rounded" />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center pb-6">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-primary"
            >
              <div className="text-xs sm:text-sm font-medium">Scroll</div>
              <DownAngleIcon size={16} />
            </motion.div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Services Section */}
      <motion.div
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="text-2xl sm:text-4xl lg:text-5xl flex gap-2 sm:gap-3 font-bold justify-center mb-3 sm:mb-4 text-center"
        >
          <p>What</p>
          <p>We</p>
          <p className="text-primary">Do</p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-text text-sm sm:text-base mb-8 sm:mb-12 text-center max-w-xl mx-auto px-4"
        >
          End-to-end digital and creative solutions for every stage of your
          project.
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={staggerContainer}
        >
          {Object.values(SERVICES).map((item, index) => {
            const { label, description, Icon, includes } = item;
            const isLastOnTablet = index === 4;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`p-5 sm:p-6 rounded-2xl border border-chip bg-card flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-primary/40 transition-all ${
                  isLastOnTablet
                    ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full"
                    : ""
                }`}
              >
                <div className="p-2.5 rounded-xl bg-chip text-primary w-fit">
                  <Icon size={26} />
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {label}
                </div>
                <div className="text-sm text-text leading-relaxed">
                  {description}
                </div>

                <div className="flex flex-col gap-2 w-full mt-auto pt-2">
                  {includes?.slice(0, 3)?.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-center gap-2 text-primary"
                    >
                      <CircleCheckedIcon size={16} />
                      <div className="text-xs sm:text-sm font-medium text-text">
                        {subItem.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={PAGES.SERVICES.href}
                  className="text-primary cursor-pointer flex items-center gap-2 font-semibold hover:gap-3 transition-all text-sm pt-2 w-fit"
                >
                  <span>Learn More</span> <RightArrowIcon size={18} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Why Triadz Section */}
      <div className="bg-card/30">
        <motion.div
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col lg:col-span-5 gap-4 text-center lg:text-left items-center lg:items-start"
          >
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <p className="text-foreground">Why Businesses</p>
              <p className="text-primary">Choose Triadz</p>
            </div>
            <div className="text-sm sm:text-base text-text leading-relaxed max-w-xl">
              We combine technical expertise with creative excellence to deliver
              digital solutions that drive real results. Every project gets our
              full attention and dedication.
            </div>
            <Link href={PAGES.CONTACT.href} className="w-full sm:w-auto">
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex text-sm font-semibold items-center justify-center gap-2 text-background bg-primary rounded-lg px-6 py-3.5 w-full sm:w-fit shadow-md cursor-pointer hover:shadow-primary/50 transition-all duration-200"
              >
                <span>Start Your Project</span>
                <RightArrowIcon size={20} />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full"
            variants={staggerContainer}
          >
            {Object.values(SKILLS).map((item, index) => {
              const { label, Icon } = item;
              return (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="px-4 py-3 rounded-xl border border-chip bg-card flex gap-3 sm:gap-4 items-center shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-chip text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-foreground">
                    {label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Works Section */}
      <motion.div
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 text-center"
        >
          Our Works
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-sm sm:text-base text-text mb-8 sm:mb-12 text-center max-w-md px-4"
        >
          A glimpse of what we&apos;ve built and designed for our clients.
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 w-full"
          variants={staggerContainer}
        >
          {Object.values(WORKS)
            .slice(0, 6)
            .map((item, index) => (
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="border border-chip rounded-2xl overflow-hidden group shadow-sm bg-card hover:border-primary/40 transition-all"
                key={index}
              >
                <div className="overflow-hidden aspect-video relative">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-card/90 backdrop-blur-sm p-4 sm:p-5">
                  <div className="px-2.5 py-1 text-xs font-semibold text-secondary bg-primary/70 w-fit rounded-full mb-2">
                    {item.category}
                  </div>
                  <div className="text-base text-foreground font-semibold">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        <Link href={PAGES.PORTFOLIO.href} className="w-full sm:w-auto">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-foreground border border-text/60 rounded-lg cursor-pointer px-6 py-3.5 flex items-center gap-3 text-sm font-medium w-full sm:w-auto justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <span>View All Projects</span>
            <RightArrowIcon size={18} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Steps Section */}
      <div className="bg-card/30">
        <motion.div
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 flex flex-wrap justify-center text-center">
            <p className="text-foreground">How We</p>
            &nbsp;
            <p className="text-primary">Work</p>
          </div>
          <div className="text-sm sm:text-base text-text mb-8 sm:mb-12 text-center max-w-md px-4">
            A clear, collaborative process from idea to delivery.
          </div>
          <div className="w-full">
            <Steps steps={steps} />
          </div>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <motion.div
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 flex flex-wrap justify-center text-center"
        >
          <p className="text-foreground">What Our Clients</p>
          &nbsp;
          <p className="text-primary">Say</p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-sm sm:text-base text-text mb-8 sm:mb-12 text-center max-w-md px-4"
        >
          Real feedback from people we&apos;ve worked with.
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full"
          variants={staggerContainer}
        >
          {REVIEWS.map((item, index) => {
            const isLastOnSm = index === 2;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className={`p-5 sm:p-6 border border-chip bg-card rounded-2xl flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all ${
                  isLastOnSm
                    ? "sm:col-span-2 sm:max-w-md sm:mx-auto md:col-span-1 md:max-w-none w-full"
                    : ""
                }`}
              >
                <div>
                  <div className="text-4xl sm:text-5xl text-primary/40 leading-none mb-2 font-serif">
                    &ldquo;
                  </div>
                  <div className="flex items-center gap-1.5 text-primary mb-3">
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarFilledIcon key={i} size={15} />
                    ))}
                  </div>
                  <div className="text-sm text-text mb-6 leading-relaxed">
                    {item.comment}
                  </div>
                </div>
                <div className="flex gap-3 items-center pt-3 border-t border-chip/60">
                  <div className="w-10 h-10 rounded-full bg-primary text-sm text-background font-bold flex items-center justify-center shrink-0">
                    {item.clientName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm text-foreground font-semibold">
                      {item.clientName}
                    </div>
                    <div className="text-xs text-text">{item.product}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <Divider />

      {/* Contact Section */}
      <div className="bg-card/30">
        <motion.div
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 flex flex-wrap justify-center text-center leading-tight"
          >
            <p className="text-foreground">Have an Idea?</p>
            &nbsp;
            <p className="text-primary">Let&apos;s Make It Happen.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="text-sm sm:text-base text-text text-center mb-8 sm:mb-12 max-w-2xl px-4 leading-relaxed"
          >
            Tell us what you need, and we&apos;ll help you turn your idea into
            reality. Whether it&apos;s a software application, a creative
            design, or a complete digital solution, we&apos;re ready to work
            with you.
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full items-start"
          >
            {/* Quick Contact Info Cards */}
            <div className="lg:col-span-4 w-full">
              <div className="text-base text-foreground font-semibold mb-3">
                Get in Touch
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <Link
                  href={CONTACT_DETAILS.whatsAppLink}
                  target="_blank"
                  className="bg-card rounded-xl border border-chip/60 flex items-center gap-3.5 p-3.5 hover:border-green/50 hover:bg-green/10 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="p-2.5 rounded-lg bg-green/20 text-green shrink-0">
                    <WhatsappIcon size={26} />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base text-foreground font-medium">
                      WhatsApp
                    </div>
                    <div className="text-xs text-text">
                      Chat with us directly
                    </div>
                  </div>
                </Link>

                <Link
                  href={CONTACT_DETAILS.mailLink}
                  target="_blank"
                  className="bg-card rounded-xl border border-chip/60 flex items-center gap-3.5 p-3.5 hover:border-red/50 hover:bg-red/10 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="p-2.5 rounded-lg bg-red/20 text-red shrink-0">
                    <MailIcon size={26} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm sm:text-base text-foreground font-medium">
                      Email Us
                    </div>
                    <div className="text-xs text-text truncate">
                      {CONTACT_DETAILS.mailId}
                    </div>
                  </div>
                </Link>

                <div className="bg-card rounded-xl border border-chip/60 flex items-center gap-3.5 p-3.5">
                  <div className="p-2.5 rounded-lg bg-blue/20 text-blue shrink-0">
                    <ChatIcon size={26} />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base text-foreground font-medium">
                      Response Time
                    </div>
                    <div className="text-xs text-text">Within 24 hours</div>
                  </div>
                </div>

                <div className="bg-background rounded-xl border border-chip/60 flex items-center gap-3.5 p-3.5">
                  <Image
                    src="/logo.png"
                    alt="Triadz Solution Logo"
                    width={36}
                    height={36}
                    className="shrink-0"
                  />
                  <div>
                    <div className="text-sm sm:text-base text-foreground font-medium">
                      Triadz Solutions
                    </div>
                    <div className="text-xs text-text">
                      Global delivery & verified development
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8 w-full">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Divider />
    </>
  );
}
