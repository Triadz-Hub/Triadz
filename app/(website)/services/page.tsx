"use client";

import Divider from "@/components/layout/Divider";
import { SERVICES } from "@/lib/data";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  CircleCheckedIcon,
  DownAngleIcon,
  RightArrowIcon,
} from "@/components/icons";
import Steps from "@/components/layout/Steps";

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

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-12 pt-32 lg:px-12 lg:pt-40">
          {/* Badge */}
          <div className="mb-8 w-fit rounded-full border border-primary/70 bg-card px-4 py-2 text-primary text-sm">
            ✦ What We Do
          </div>

          {/* Heading */}
          <h1 className="mb-4 flex flex-wrap justify-center gap-x-3 text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span>Our</span>

            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-center text-base leading-7 text-text sm:text-lg">
            From software applications to stunning visual designs, we offer a
            complete range of digital services to help your business grow and
            stand out.
          </p>

          {/* Service selector */}
          <div className="flex w-full max-w-full flex-wrap justify-center gap-3">
            {services.map((item) => {
              const ItemIcon = item.Icon;
              const isSelected = item.value === service.value;

              return (
                <button
                  type="button"
                  key={item.value}
                  onClick={() => setService(item)}
                  aria-pressed={isSelected}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 transition-all duration-300 ease-in-out ${
                    isSelected
                      ? "border-secondary/70 bg-primary text-background shadow-lg shadow-primary/10"
                      : `border-text/70 bg-${item.color}/60 text-${item.color} hover:border-primary/40 hover:bg-card`
                  }`}
                >
                  <ItemIcon size={22} />

                  <span
                    className={`whitespace-nowrap text-sm sm:text-base ${isSelected ? "text-background" : "text-foreground"}`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* Animated service details */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:pb-10 lg:pt-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={service.value}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 gap-10 md:grid-cols-2"
          >
            {/* Left: service information */}
            <div className="flex flex-col items-start gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-primary"
              >
                <Icon size={20} />

                <span className="text-base">{service.label}</span>
              </motion.div>

              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                {service.title}
              </h2>

              {/* Optional description */}
              {"body" in service && typeof service.description === "string" && (
                <p className="max-w-xl leading-7 text-text text-base">
                  {service.body}
                </p>
              )}
              <button className="flex items-center gap-2 bg-primary rounded-lg px-4 py-2 text-base font-semibold text-background">
                <p>Get Quote</p>
                <RightArrowIcon size={24} />
              </button>
            </div>

            {/* Right: visual panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-8 backdrop-blur-xl"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,181,0,0.12),transparent_65%)]"
              />
              <ThreeD />
            </motion.div>
          </motion.div>
        </AnimatePresence>
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
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isSelected
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
        <div className="text-xl font-semibold mt-20 mb-8">What's Included</div>
        <div className="grid grid-cols-3 gap-8">
          {service.includes.map((item, index) => {
            return (
              <div
                className="bg-card border border-chip flex flex-col rounded-lg"
                key={index}
              >
                <div className="flex items-center justify-between p-4 border-b border-text/60 text-text">
                  <div className="flex gap-2 items-center text-primary">
                    <CircleCheckedIcon size={20} />
                    <div className="text-base text-foreground">
                      {item.label}
                    </div>
                  </div>
                  <DownAngleIcon size={12} />
                </div>
                <div className="text-sm text-text p-4">{item.description}</div>
              </div>
            );
          })}
        </div>
        <div className="text-xl font-semibold mt-20 mb-8">Our Process</div>
        <Steps steps={service.process} />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:pt-10 lg:pb-20 flex flex-col items-center">
        <div className="text-3xl font-semibold mt-20 mb-2 flex">
          <p>All</p>&nbsp;<p className="text-primary">Service Categories</p>
        </div>
        <div className="text-sm text-text mb-6">
          Click any category to explore in detail
        </div>
        <div className="grid grid-cols-3 gap-8">
          {Object.values(SERVICES).map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={index}
                className={`p-4 bg-${item.color}/60 border border-${item.color}/90 rounded-xl flex flex-col gap-4`}
              >
                <div className={`p-2 bg-${item.color}/90 text-${item.color}`}>
                  <Icon size={24} />
                </div>
                <div className="text-xl text-foreground">{item.label}</div>
                <div className="text-sm text-text">{item.title}</div>
                <div
                  className={`text-${item.color} text-sm flex items-center gap-2 cursor-pointer hover:text-shadow-2xs hover:text-shadow-${item.color}`}
                >
                  <p>View Details</p>
                  <RightArrowIcon size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Divider />
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-20 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl flex mb-4">
          <p>Not Sure Which</p>&nbsp;
          <p className="text-primary">Service You Need?</p>
        </h2>
        <div className="text-base text-text mb-4 w-3/5 text-center">
          Tell us about your project and we'll recommend the best approach for
          your goals and budget.
        </div>
        <button className="flex items-center text-base text-background bg-primary rounded-lg px-6 py-3 cursor-pointer">
          <p>Get a Free Consultation</p>
          <RightArrowIcon />
        </button>
      </section>
      <Divider />
    </>
  );
}
