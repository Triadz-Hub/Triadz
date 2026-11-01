import { IconProps } from "@/lib/types";

export default function ClockIcon({ size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 7v5l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
      />
    </svg>
  );
}
