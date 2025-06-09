export function Pokeball({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="50" r="45" />
      <path d="M5,50 h90" />
      <circle cx="50" cy="50" r="15" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}