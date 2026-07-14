type LeafMarkProps = {
  className?: string
}

// Simple handcrafted leaf + thread mark for Eri Macros.
export function LeafMark({ className }: LeafMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4C13 9 7 18 7 28c0 8 6 15 17 16 11-1 17-8 17-16C41 18 35 9 24 4Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M24 6c-9.5 4.5-15 12.5-15 21.5C9 35 14.5 41 24 42c9.5-1 15-7 15-14.5C39 18.5 33.5 10.5 24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 9v31"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 18c-3-2-6-2.5-9-2M24 26c-4-2.5-7.5-3-11-2.5M24 18c3-2 6-2.5 9-2M24 26c4-2.5 7.5-3 11-2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
