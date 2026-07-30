import { HiBuildingOffice2 } from "react-icons/hi2";

interface AmazeLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  className?: string;
}

const SIZE_MAP = {
  sm: {
    mark: "h-10 w-10 rounded-xl",
    icon: "h-5 w-5",
    name: "text-lg",
    subtitle: "text-[11px]",
    gap: "gap-2.5",
  },
  md: {
    mark: "h-13 w-13 rounded-xl",
    icon: "h-7 w-7",
    name: "text-2xl",
    subtitle: "text-xs",
    gap: "gap-3",
  },
  lg: {
    mark: "h-16 w-16 rounded-2xl",
    icon: "h-8 w-8",
    name: "text-3xl",
    subtitle: "text-sm",
    gap: "gap-4",
  },
  xl: {
    mark: "h-20 w-20 rounded-2xl",
    icon: "h-10 w-10",
    name: "text-4xl",
    subtitle: "text-base",
    gap: "gap-5",
  },
} as const;

export default function AmazeLogo({
  size = "md",
  showSubtitle = true,
  className = "",
}: AmazeLogoProps) {
  const tokens = SIZE_MAP[size];

  return (
    <div
      className={`inline-flex items-center ${tokens.gap} ${className}`}
      role="img"
      aria-label="AmazePMS — Property Management Software"
    >
      {/* Icon mark: rounded square with a richer blue gradient + inner glow */}
      <span
        className={`
          relative flex ${tokens.mark} shrink-0 items-center justify-center
          bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800
          shadow-[0_2px_4px_rgba(15,23,42,0.15),0_8px_20px_-4px_rgba(37,99,235,0.5)]
          ring-1 ring-inset ring-white/25
          before:absolute before:inset-0 before:rounded-[inherit]
          before:bg-gradient-to-b before:from-white/20 before:to-transparent
          before:opacity-60
        `}
      >
        <HiBuildingOffice2
          className={`relative ${tokens.icon} text-white drop-shadow-sm`}
          aria-hidden="true"
        />
      </span>

      {/* Wordmark + subtitle */}
      <span className="flex flex-col leading-tight">
        <span
          className={`
            font-[var(--font-space-grotesk,'Space_Grotesk',sans-serif)]
            ${tokens.name} font-bold tracking-tight
            text-slate-900 dark:text-white
          `}
        >
          AmazePMS
        </span>

        {showSubtitle && (
          <span
            className={`
              font-[var(--font-inter,'Inter',sans-serif)]
              ${tokens.subtitle} mt-0.5 font-medium tracking-wide
              text-slate-500 dark:text-slate-400
            `}
          >
            Property Management Software
          </span>
        )}
      </span>
    </div>
  );
}