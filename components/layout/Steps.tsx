import { StepsType } from "@/lib/types";

interface Props {
  steps: StepsType[];
}

export default function Steps({ steps = [] }: Props) {
  return (
    <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-6">
      {/* Connecting line - desktop only */}
      <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-secondary via-primary to-secondary lg:block" />

      {steps.map((step, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center text-center"
        >
          {/* Number card */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary bg-card text-2xl font-bold text-primary transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
            {index + 1}
          </div>

          {/* Content */}
          <h3 className="mt-7 text-base font-semibold sm:text-lg">
            {step.label}
          </h3>

          <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
