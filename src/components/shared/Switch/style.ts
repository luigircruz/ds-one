import { cva } from "class-variance-authority";

const switchVariants = cva(
  [
    "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
    "data-[state=unchecked]:bg-neutral-300",
    "focus:enabled:outline-none focus:enabled:ring-transparent",
    "focus-visible:enabled:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "data-[state=checked]:bg-neutral-900",
          "focus-visible:enabled:ring-neutral-900",
        ],
        success: [
          "data-[state=checked]:bg-green-500",
          "focus-visible:enabled:ring-green-500",
        ],
        warning: [
          "data-[state=checked]:bg-yellow-500",
          "focus-visible:enabled:ring-yellow-500",
        ],
        danger: [
          "data-[state=checked]:bg-red-600",
          "focus-visible:enabled:ring-red-600",
        ],
        info: [
          "data-[state=checked]:bg-blue-500",
          "focus-visible:enabled:ring-blue-500",
        ],
      },
      size: {
        sm: [
          "h-4 w-7",
          "[&>span]:h-3 [&>span]:w-3",
          "[&>span]:data-[state=checked]:translate-x-3",
        ],
        md: [
          "h-6 w-11",
          "[&>span]:h-5 [&>span]:w-5",
          "[&>span]:data-[state=checked]:translate-x-5",
        ],
        lg: [
          "h-8 w-14",
          "[&>span]:h-7 [&>span]:w-7",
          "[&>span]:data-[state=checked]:translate-x-6",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export { switchVariants };
