import { cva } from "class-variance-authority";

const radioVariants = cva(
  [
    "h-6 w-6 rounded-full shrink-0 overflow-hidden border",
    "focus:enabled:outline-none focus:enabled:ring-transparent",
    "focus-visible:enabled:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-50",
    "[&>span]:after:w-3 [&>span]:after:h-3",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-neutral-900 focus:ring-neutral-900",
          "focus-visible:enabled:ring-neutral-900",
          "[&>span]:after:bg-neutral-900",
        ],
        success: [
          "border-green-600 focus:ring-green-600",
          "focus-visible:enabled:ring-green-600",
          "[&>span]:after:bg-green-600",
        ],
        info: [
          "border-blue-500 focus:ring-blue-500",
          "focus-visible:enabled:ring-blue-500",
          "[&>span]:after:bg-blue-500",
        ],
        warning: [
          "border-yellow-500 focus:ring-yellow-500",
          "focus-visible:enabled:ring-yellow-500",
          "[&>span]:after:bg-yellow-500",
        ],
        danger: [
          "border-red-600 focus:ring-red-600",
          "focus-visible:enabled:ring-red-600",
          "[&>span]:after:bg-red-600",
        ],
      },
      hasError: {
        true: [
          "border-red-600",
          "focus-visible:enabled:ring-red-600",
          "[&>span]:after:bg-red-600",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      hasError: false,
    },
  }
);

export { radioVariants };
