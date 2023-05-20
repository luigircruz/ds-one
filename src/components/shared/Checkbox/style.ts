import { cva } from "class-variance-authority";

const checkboxVariants = cva(
  [
    "peer shrink-0 h-6 w-6 rounded-sm border overflow-hidden",
    "focus:enabled:outline-none focus:enabled:ring-transparent",
    "focus-visible:enabled:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-neutral-900",
          "[&[data-state=checked]]:bg-neutral-900",
          "focus-visible:enabled:ring-neutral-900",
        ],
        success: [
          "border-green-500",
          "[&[data-state=checked]]:bg-green-500",
          "focus-visible:enabled:ring-green-500",
        ],
        info: [
          "border-blue-500",
          "[&[data-state=checked]]:bg-blue-500",
          "focus-visible:enabled:ring-blue-500",
        ],
        warning: [
          "border-yellow-500",
          "[&[data-state=checked]]:bg-yellow-500",
          "focus-visible:enabled:ring-yellow-500",
        ],
        danger: [
          "border-red-600",
          "[&[data-state=checked]]:bg-red-600",
          "focus-visible:enabled:ring-red-600",
        ],
      },
      hasError: {
        true: [
          "border-red-600",
          "[&[data-state=checked]]:bg-red-600",
          "focus-visible:enabled:ring-red-600",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      hasError: false,
    },
  }
);

export { checkboxVariants };
