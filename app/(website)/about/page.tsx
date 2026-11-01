import {
  CircleCheckedIcon,
  EyeIcon,
  RightArrowIcon,
  TargetIcon,
  TerminalIcon,
} from "@/components/icons";
import Divider from "@/components/layout/Divider";
import { STORY } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
        />

        <div className="px-6 lg:px-20 xl:px-80 pt-40 pb-20 flex flex-col items-center">
          <div className="px-4 py-2 rounded-full bg-card w-fit text-primary mb-8 border border-primary/70">
            ✦ About Triadz
          </div>
          <div className="text-center text-6xl font-bold text-white md:text-6xl mb-4">
            <div className="flex justify-center">
              <p>We Are a Team of</p> &nbsp;
              <p className="text-primary">Creators, </p>
            </div>
            <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Developers & Designers.
            </p>
          </div>
          <div className="text-lg text-text w-5/9 text-center">
            Triadz is a full-service digital agency built on a simple belief —
            every idea deserves to be brought to life with precision,
            creativity, and purpose. We combine technical expertise with
            creative excellence to deliver digital solutions that make a real
            difference.
          </div>
        </div>
      </div>
      <Divider />
      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 grid grid-cols-4 gap-12">
        <div className="flex flex-col flex-1 items-center justify-center py-4 px-12 gap-2 rounded-lg bg-card border border-text/70">
          <div className="text-3xl text-primary font-semibold">100+</div>
          <div className="text-base text-text">Projects Delivered</div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center py-4 px-12 gap-2 rounded-lg bg-card border border-text/70">
          <div className="text-3xl text-primary font-semibold">50+</div>
          <div className="text-base text-text">Happy Clients</div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center py-4 px-12 gap-2 rounded-lg bg-card border border-text/70">
          <div className="text-3xl text-primary font-semibold">5+</div>
          <div className="text-base text-text">Service Categories</div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center py-4 px-12 gap-2 rounded-lg bg-card border border-text/70">
          <div className="text-3xl text-primary font-semibold">2+</div>
          <div className="text-base text-text">Years of Experience</div>
        </div>
      </div>

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 grid grid-cols-2 gap-8">
        <div className="relative isolate overflow-hidden flex-1 border border-primary/60 rounded-xl flex items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
          />
          <div className=" absolute p-6 rounded-xl border-secondary/70 bg-foreground/5 backdrop-blur-xl shadow-lg shadow-black/10 left-12 top-12 animate-bounce-rotate">
            <div className="w-8 h-8 rounded-lg bg-primary" />
          </div>
          <div className="absolute p-6 rounded-xl border-secondary/70 bg-primary/10 backdrop-blur-xl shadow-lg shadow-black/10 rotate-165 right-12 top-12 animate-bounce-rotate" />
          <div className="absolute p-12 rounded-xl border-secondary/70 bg-primary/10 backdrop-blur-xl shadow-lg shadow-black/10 right-12 bottom-24 animate-bounce-smooth" />
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-xl drop-shadow-md drop-shadow-primary bg-card mb-1">
              <Image
                src="/logo.png"
                alt="Triadz Solutions Logo"
                width={72}
                height={72}
                className="drop-shadow-sm drop-shadow-primary"
              />
            </div>
            <div className="text-sm text-primary">TRIADZ : : KERNEL</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-background p-4 flex items-center justify-center text-xs text-primary gap-2">
            <TerminalIcon size={16} />
            <div>Building digital products since day one</div>
          </div>
        </div>
        <div className="flex flex-col items-baseline">
          <div className="text-3xl text-primary mb-6 font-semibold">
            Our Story
          </div>
          {STORY.map((text, index) => {
            return (
              <div className="text-base text-text mb-2" key={index}>
                {text}
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 flex flex-col gap-8 items-center">
        <div className="text-center text-6xl font-bold text-white md:text-6xl mb-4 flex">
          <p>Mission</p> &nbsp;
          <p className="text-primary">& Vision</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="border border-primary border-t-6 rounded-xl p-4 bg-card flex flex-col items-baseline">
            <div className="p-2 rounded-lg bg-primary/10 text-primary mb-4">
              <TargetIcon size={24} />
            </div>
            <div className="text-xl font-semibold mb-2">Our Mission</div>
            <div className="text-base/normal text-text ">
              To deliver high-quality, customized digital solutions that help
              businesses grow, communicate effectively, and stand out in a
              competitive world.
            </div>
          </div>
          <div className="border border-primary border-t-6 rounded-xl p-4 bg-card flex flex-col items-baseline">
            <div className="p-2 rounded-lg bg-primary/10 text-primary mb-4">
              <EyeIcon size={24} />
            </div>
            <div className="text-xl font-semibold mb-2">Our Vision</div>
            <div className="text-base/normal text-text ">
              To be the most trusted digital agency for businesses and creators
              who want both technical excellence and creative brilliance — all
              in one place.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="bg-card p-4 rounded-xl border border-secondary/30 flex flex-col items-baseline">
            <div className="flex items-center gap-1 text-primary mb-2">
              <CircleCheckedIcon size={20} />
              <p className="text-base text-foreground font-semibold">
                Quality First
              </p>
            </div>
            <div className="text-xs/normal text-text">
              We never compromise on the quality of our work. Every pixel, every
              line of code, every frame matters.
            </div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-secondary/30 flex flex-col items-baseline">
            <div className="flex items-center gap-1 text-primary mb-2">
              <CircleCheckedIcon size={20} />
              <p className="text-base text-foreground font-semibold">
                Client-Centric
              </p>
            </div>
            <div className="text-xs/normal text-text">
              Your goals are our goals. We listen carefully and tailor every
              solution to your specific needs.
            </div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-secondary/30 flex flex-col items-baseline">
            <div className="flex items-center gap-1 text-primary mb-2">
              <CircleCheckedIcon size={20} />
              <p className="text-base text-foreground font-semibold">
                Transparency
              </p>
            </div>
            <div className="text-xs/normal text-text">
              Clear communication, honest timelines, and no hidden surprises —
              from start to finish.
            </div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-secondary/30 flex flex-col items-baseline">
            <div className="flex items-center gap-1 text-primary mb-2">
              <CircleCheckedIcon size={20} />
              <p className="text-base text-foreground font-semibold">
                Continuous Growth
              </p>
            </div>
            <div className="text-xs/normal text-text">
              We stay ahead of trends and constantly upgrade our skills to bring
              you the best solutions.
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 flex flex-col items-center">
        <div className="text-center text-5xl font-bold text-white mb-4 flex">
          <p>Ready to Work</p> &nbsp;
          <p className="text-primary">With Us?</p>
        </div>
        <div className="text-base text-text w-3/5 text-center mb-8">
          Whether you have a project in mind or just want to explore what's
          possible, we'd love to hear from you.
        </div>
        <button className="px-4 py-3 text-background cursor-pointer flex items-center gap-2 rounded-lg bg-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
          <p className="text-base">Start a Conversation</p>
          <RightArrowIcon size={24} />
        </button>
      </div>
      <Divider />
    </>
  );
}
