import { IconProps } from "@/lib/types";

export default function CircleCheckedIcon({ size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.4"
      >
        <path d="M24 8.5c8.8 0 15.5 6.7 15.5 15.5S32.8 39.5 24 39.5S8.5 32.8 8.5 24S15.2 8.5 24 8.5" />
        <path d="M16.5 24.5c2 2.2 3.9 4.4 5.7 6.7c3.1-4.7 6.4-9.2 9.8-13.6" />
      </g>
    </svg>
  );
}
