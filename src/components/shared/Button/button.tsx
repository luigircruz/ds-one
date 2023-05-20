import useRipple from "@/hooks/useRipple";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import { buttonVariants } from "./style";
import { ButtonElement, ButtonProps } from "./types";
import { SpinnerIcon } from "@/components/icons/Spinner";

export const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      shape,
      shadow,
      ripple = true,
      isLoading = false,
      loadingText = "Loading...",
      className,
      ...props
    },
    ref
  ) => {
    const { createRipple } = useRipple();

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            shape,
            shadow,
            className,
          })
        )}
        onMouseDown={(e) => {
          const onMouseDown = props.onMouseDown;

          if (ripple) {
            createRipple(e, "dark");
          }

          return typeof onMouseDown === "function" ? onMouseDown(e) : null;
        }}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <SpinnerIcon className="animate-spin h-5 w-5" />
            <span>{loadingText}</span>
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);

Button.displayName = "LCUI-Button";
