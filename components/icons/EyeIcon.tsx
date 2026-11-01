import { IconProps } from "@/lib/types";

export default function EyeIcon({ size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <title>eye</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
        <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
      </g>
    </svg>
  );
}
