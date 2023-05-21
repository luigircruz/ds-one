import { cva } from "class-variance-authority";

const buttonVariants = cva(
  [
    "transition w-fit select-none flex items-center justify-center",
    "focus:enabled:outline-none focus:enabled:ring-transparent",
    "focus-visible:enabled:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-90 disabled:shadow-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-500 text-white",
          "hover:enabled:bg-primary-500/80",
          "active:enabled:bg-primary-500/60",
          "focus-visible:enabled:ring-primary-500",
          "disabled:bg-primary-100 disabled:text-primary-300",
        ],
        secondary: [
          "bg-secondary-500 text-white",
          "hover:enabled:bg-secondary-500/80",
          "active:enabled:bg-secondary-500/60",
          "focus-visible:enabled:ring-secondary-500",
          "disabled:bg-secondary-100 disabled:text-secondary-300",
        ],
        accent: [
          "bg-accent-500 text-white",
          "hover:enabled:bg-accent-500/80",
          "active:enabled:bg-accent-500/60",
          "focus-visible:enabled:ring-accent-500",
          "disabled:bg-accent-100 disabled:text-accent-300",
        ],
        success: [
          "bg-green-500 text-white",
          "hover:enabled:bg-green-500/80",
          "active:enabled:bg-green-500/60",
          "focus-visible:enabled:ring-green-500",
          "disabled:bg-green-100 disabled:text-green-300",
        ],
        info: [
          "bg-info-500 text-white",
          "hover:enabled:bg-info-500/80",
          "active:enabled:bg-info-500/60",
          "focus-visible:enabled:ring-info-500",
          "disabled:bg-info-100 disabled:text-info-300",
        ],
        warning: [
          "bg-warning-500 text-white",
          "hover:enabled:bg-warning-500/80",
          "active:enabled:bg-warning-500/60",
          "focus-visible:enabled:ring-warning-500",
          "disabled:bg-warning-100 disabled:text-warning-300",
        ],
        danger: [
          "bg-danger-600 text-white",
          "hover:enabled:bg-danger-600/80",
          "active:enabled:bg-danger-600/60",
          "focus-visible:enabled:ring-danger-600",
          "disabled:bg-danger-100 disabled:text-danger-300",
        ],
        outline: [
          "text-gray-700 bg-white border border-gray-200",
          "hover:enabled:bg-gray-50",
          "active:enabled:bg-gray-100",
          "focus-visible:enabled:ring-gray-700",
          "disabled:bg-gray-100",
        ],
      },
      size: {
        sm: "px-2 py-1 text-xs gap-1",
        md: "px-4 py-2 text-sm gap-2",
        lg: "px-6 py-4 text-base gap-4",
      },
      shape: {
        rounded: "rounded",
        pill: "rounded-full",
      },
      shadow: {
        sm: "shadow-sm",
        md: "shadow",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "rounded",
    },
  }
);

export { buttonVariants };
