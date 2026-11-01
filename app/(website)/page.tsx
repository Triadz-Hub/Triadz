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
  REVIEWS,
  SERVICES,
  SKILLS,
  steps,
  WORKS,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="px-6 lg:px-20 xl:px-80 flex-1 bg-[url('/home-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-2 gap-8 pt-40 pb-32">
          <div className="flex flex-col gap-4">
            <div className="px-4 py-2 rounded-full bg-card w-fit text-primary mb-8 border border-primary/70">
              ✦ Digital Agency
            </div>
            <div className="text-6xl font-bold mb-4">
              <p>We Build Digital Products & Create</p>
              <p className="text-primary">Extraordinary</p>
              <p className="text-secondary">Designs.</p>
            </div>
            <div className="text-base/normal text-text mb-8">
              Need a website, mobile application, brand design, photo editing,
              video production, or 3D visualization? We provide creative and
              technical solutions tailored to your ideas and business goals.
            </div>
            <div className="flex items-center gap-8 mb-4">
              <button className="px-4 py-3 text-background cursor-pointer flex items-center gap-2 rounded-lg bg-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                <p>Get Free Quote</p>
                <RightArrowIcon />
              </button>
              <button className="border rounded-lg border-text text-foreground px-4 py-3 cursor-pointer hover:shadow-lg hover:shadow-background/10 hover:-translate-y-1 transition-all duration-300">
                View Our Services
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-card">
                <Image
                  src="/logo.png"
                  alt="Triadz Solution Logo"
                  width={28}
                  height={28}
                />
              </div>
              <div className="text-base text-foreground">
                Architected with precision • Scaled worldwide
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-20 border border-primary/40 p-4 pr-12 rounded-2xl bg-card backdrop-blur-sm animate-bounce-smooth">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3  rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-text text-sm flex">
                const app = &nbsp;<p className="text-primary">triadz</p>();
              </div>
              <div className="text-text text-sm flex">
                await app.<p className="text-secondary">build</p>();
              </div>
              <div className="text-primary text-sm">// ✓ Deployed</div>
            </div>

            <div className="absolute bottom-40 left-10 border border-secondary/40 p-4 rounded-2xl bg-card backdrop-blur-sm animate-bounce-slow">
              <div className="text-sm text-text mb-2">Design Tools</div>
              <div className="flex items-center gap-3">
                <div className="p-2 border border-cyan bg-cyan/30 rounded">
                  <div className="p-1 rounded bg-cyan text-background">
                    <FigmaIcon size={12} />
                  </div>
                </div>
                <div className="p-2 text-purple border border-purple bg-purple/30 rounded">
                  <div className="p-1 rounded bg-purple text-background">
                    <SketchIcon size={12} />
                  </div>
                </div>
                <div className="p-2 text-pink border border-pink bg-pink/30 rounded">
                  <div className="p-1 rounded bg-pink text-background">
                    <CanvaIcon size={12} />
                  </div>
                </div>
                <div className="p-2 text-yellow border border-yellow bg-yellow/30 rounded">
                  <div className="p-1 rounded bg-yellow text-background">
                    <PenpotIcon size={12} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-0 border border-primary/40 px-4 py-3 rounded-full bg-card backdrop-blur-sm animate-bounce-smooth">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {REVIEWS.map((user, index) => (
                    <div
                      key={index}
                      className={`relative flex size-6 items-center justify-center rounded-full bg-${user.color} text-sm font-semibold text-background`}
                    >
                      {user.clientName.charAt(0)}
                    </div>
                  ))}
                </div>
                <div className="text-foreground text-sm">
                  100+ Projects Delivered
                </div>
              </div>
            </div>

            <div className="absolute top-40 right-20 border border-primary/40 rounded-2xl p-2 bg-card backdrop-blur-sm animate-bounce-slow flex flex-col">
              <div className="w-8 h-1 bg-text rounded-full mb-1 self-center" />
              <div className="h-24 w-20 bg-primary/80 rounded mb-2" />
              <div className="h-1 w-18 rounded bg-text/20 mb-1" />
              <div className="h-1 w-12 rounded bg-text/20 mb-1" />
              <div className="h-6 w-20 bg-primary/20 rounded" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center text-primary animate-bounce-smooth">
            <div className="text-sm ">Scroll</div>
            <DownAngleIcon size={16} />
          </div>
        </div>
      </div>

      <Divider />

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 ">
        <div className="text-5xl flex gap-6 font-bold justify-center mb-4">
          <p>What</p>
          <p>We</p>
          <p className="text-primary">Do</p>
        </div>
        <div className="text-text text-base mb-8 text-center">
          End-to-end digital and creative solutions for every stage of your
          project.
        </div>

        <div className="grid grid-cols-3 gap-4">
          {Object.values(SERVICES).map((item, index) => {
            const { label, description, Icon, includes } = item;
            return (
              <div
                key={index}
                className="p-4 rounded-lg border border-chip bg-card flex flex-col gap-4 items-baseline"
              >
                <div className="p-2 rounded-lg bg-chip text-primary">
                  <Icon size={28} />
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {label}
                </div>
                <div className="text-base text-text">{description}</div>

                <div className="flex flex-col gap-2">
                  {includes?.slice(0, 3)?.map((item, index) => {
                    const { label } = item;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-1 text-primary"
                      >
                        <CircleCheckedIcon size={16} />
                        <div className="text-sm font-semibold text-text">
                          {label}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-primary cursor-pointer hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 font-semibold hover:gap-4">
                  <span>Learn More</span> <RightArrowIcon size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 bg-card/30 grid grid-cols-12 gap-8">
        <div className="flex flex-col col-span-4 gap-4">
          <div className="text-5xl font-bold">
            <p className="text-foreground ">Why Businesses</p>
            <p className="text-primary ">Choose Triadz</p>
          </div>
          <div className="text-base text-text ">
            We combine technical expertise with creative excellence to deliver
            digital solutions that drive real results. Every project gets our
            full attention and dedication.
          </div>
          <button className="flex text-sm font-semibold items-center gap-2 text-background bg-primary rounded-lg px-4 py-3 w-fit shadow-md cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow hover:shadow-primary/70">
            <p>Start Your Project</p>
            <RightArrowIcon size={20} />
          </button>
        </div>
        <div className="col-span-8 grid grid-cols-2 gap-2">
          {Object.values(SKILLS).map((item, index) => {
            const { label, Icon } = item;
            return (
              <div
                key={index}
                className="px-4 py-2 rounded-lg border border-chip bg-card flex gap-4 items-center"
              >
                <div className="p-2 rounded-lg bg-chip text-primary">
                  <Icon size={20} />
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 flex flex-col items-center">
        <div className="text-5xl font-bold text-primary mb-4">Our Works</div>
        <div className="text-base text-text mb-8">
          A glimpse of what we've built and designed for our clients.
        </div>
        <div className="grid grid-cols-3 gap-8 mb-6">
          {Object.values(WORKS)
            .slice(0, 6)
            .map((item, index) => {
              return (
                <div
                  className="border border-text/70 rounded-lg overflow-hidden"
                  key={index}
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
                  <div className="bg-card/70 backdrop-blur-sm p-3">
                    <div className="px-2 py-1 text-xs font-semibold text-secondary bg-primary/70 w-fit rounded-full mb-2">
                      {item.category}
                    </div>
                    <div className="text-base text-foreground font-semibold">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button className="text-foreground border border-text rounded-lg cursor-pointer px-6 py-3 flex items-center gap-4">
          <p>View All Projects</p>
          <RightArrowIcon size={20} />
        </button>
      </div>

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 bg-card/30 flex flex-col items-center">
        <div className="text-5xl font-bold mb-4 flex">
          <p className="text-foreground">How We</p>
          &nbsp;
          <p className="text-primary">Works</p>
        </div>
        <div className="text-base text-text mb-8">
          A clear, collaborative process from idea to delivery.
        </div>
        <Steps steps={steps} />
      </div>

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 flex flex-col items-center">
        <div className="text-5xl font-bold mb-4 flex">
          <p className="text-foreground">What Our Clients</p>
          &nbsp;
          <p className="text-primary">Say</p>
        </div>
        <div className="text-base text-text mb-8">
          Real feedback from people we've worked with.
        </div>
        <div className="grid grid-cols-3 gap-8">
          {REVIEWS.map((item, index) => {
            return (
              <div
                className="p-4 border border-text/70 bg-card rounded-lg"
                key={index}
              >
                <div className="text-6xl text-text/70 mb-4">"</div>
                <div className="flex items-center gap-2 text-primary mb-4">
                  {Array.from({ length: 5 }, (_, index) => {
                    return <StarFilledIcon key={index} size={16} />;
                  })}
                </div>
                <div className="text-sm text-text mb-4">{item.comment}</div>
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-base text-background font-bold flex items-center justify-center">
                    {item.clientName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm text-foreground font-semibold">
                      {item.clientName}
                    </div>
                    <div className="text-xs text-text">{item.product}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Divider />

      <div className="px-6 lg:px-20 xl:px-80 xl:py-20 bg-card/30 flex flex-col items-center">
        <div className="text-5xl font-bold mb-4 flex">
          <p className="text-foreground">Have an Idea?</p>
          &nbsp;
          <p className="text-primary">Let's Make It Happen.</p>
        </div>
        <div className="text-base text-text text-center mb-8 w-1/2">
          Tell us what you need, and we'll help you turn your idea into reality.
          Whether it's a software application, a creative design, or a complete
          digital solution, we're ready to work with you.
        </div>
        <div className="grid grid-cols-12 gap-8 w-full">
          <div className="col-span-4">
            <div className="text-base text-foreground font-semibold mb-4">
              Get in Touch
            </div>
            <Link
              href={CONTACT_DETAILS.whatsAppLink}
              target="_blank"
              className="bg-card rounded-lg flex items-center gap-4 p-3 hover:bg-green/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 mb-4"
            >
              <div className="p-2 rounded-lg bg-green/30 text-green">
                <WhatsappIcon size={32} />
              </div>
              <div>
                <div className="text-lg text-foreground">WhatsApp</div>
                <div className="text-xs text-text">Chat with us directly</div>
              </div>
            </Link>
            <Link
              href={CONTACT_DETAILS.mailLink}
              target="_blank"
              className="bg-card rounded-lg flex items-center gap-4 p-3 hover:bg-red/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 mb-4"
            >
              <div className="p-2 rounded-lg bg-red/30 text-red">
                <MailIcon size={32} />
              </div>
              <div>
                <div className="text-lg text-foreground">Email US</div>
                <div className="text-xs text-text">
                  {CONTACT_DETAILS.mailId}
                </div>
              </div>
            </Link>
            <div className="bg-card rounded-lg flex items-center gap-4 p-3 mb-4">
              <div className="p-2 rounded-lg bg-blue/30 text-blue">
                <ChatIcon size={32} />
              </div>
              <div>
                <div className="text-lg text-foreground">Response Time</div>
                <div className="text-xs text-text">Whithin 24 hours</div>
              </div>
            </div>
            <div className="bg-background rounded-lg flex items-center gap-4 p-3">
              <Image
                src="/logo.png"
                alt="Triadz Solution Logo"
                width={40}
                height={40}
              />
              <div>
                <div className="text-lg text-foreground">Triadz Solutions</div>
                <div className="text-xs text-text">
                  Global delivery & verified development
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>

      <Divider />
    </>
  );
}
