import { RightArrowIcon, StarFilledIcon } from "@/components/icons";
import Divider from "@/components/layout/Divider";
import { WORKS } from "@/lib/data";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,181,0,0.13)_0%,transparent_48%),radial-gradient(ellipse_at_0%_75%,rgba(0,197,255,0.045)_0%,transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(255,181,0,0.035)_0%,transparent_35%)]"
        />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-12 pt-32 lg:px-12 lg:pt-40">
          {/* Badge */}
          <div className="mb-8 w-fit rounded-full border border-primary/70 bg-card px-4 py-2 text-primary text-sm">
            ✦ Our Work
          </div>
          <h1 className="mb-4 flex flex-wrap justify-center gap-x-3 text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span>Our</span>

            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-center text-base leading-7 text-text sm:text-lg">
            A showcase of projects we've delivered — from custom software and
            stunning websites to bold graphic designs, polished visuals, and
            immersive 3D experiences.
          </p>
        </div>
      </section>
      <Divider />
      <section className="px-6 py-12 lg:px-12 lg:py-10 bg-card">
        <div className="grid grid-cols-4 gap-12 lg:px-80">
          <div className="flex flex-col flex-1 items-center justify-center gap-2">
            <div className="text-3xl text-primary font-semibold">100+</div>
            <div className="text-base text-text">Projects Delivered</div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-2">
            <div className="text-3xl text-primary font-semibold">50+</div>
            <div className="text-base text-text">Happy Clients</div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-2">
            <div className="text-3xl text-primary font-semibold">5+</div>
            <div className="text-base text-text">Service Categories</div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-2">
            <div className="text-3xl text-primary font-semibold flex items-center">
              5<StarFilledIcon size={24} />
            </div>
            <div className="text-base text-text">Average Rating</div>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 lg:px-80 lg:py-20 grid grid-cols-3 gap-8">
        {Object.values(WORKS).map((item, index) => {
          return (
            <div
              className="border border-text/70 rounded-lg overflow-hidden flex flex-col"
              key={index.toString()}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="bg-card/70 backdrop-blur-sm p-3 flex-1">
                <div className="px-2 py-1 text-xs font-semibold text-secondary bg-primary/70 w-fit rounded-full mb-2">
                  {item.category}
                </div>
                <div className="text-base text-foreground font-semibold">
                  {item.label}
                </div>
                <div className="text-sm text-text line-clamp-2">
                  {item.description}
                </div>
                <div className="flex items-center flex-wrap mt-2 gap-1">
                  {item.technologies.split(",").map((tech, inx) => {
                    return (
                      <div
                        className="text-xs text-text py-1 px-2 rounded-full border-text/70 bg-background"
                        key={inx.toString()}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Divider />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-20 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl flex mb-4">
          <p>Have a Project</p>&nbsp;
          <p className="text-primary">in Mind?</p>
        </h2>
        <div className="text-base text-text mb-4 w-3/5 text-center">
          Let's create something exceptional together. Share your idea and we'll
          get back to you within 24 hours.
        </div>
        <button className="flex items-center text-base text-background bg-primary rounded-lg px-6 py-3 cursor-pointer">
          <p>Start a Project</p>
          <RightArrowIcon />
        </button>
      </section>
      <Divider />
    </>
  );
}
