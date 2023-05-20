import { forwardRef } from "react";
import { ButtonElement, ButtonProps } from "./types";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./style";
import useRipple from "@/hooks/useRipple";

export const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      shape,
      shadow,
      ripple = true,
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
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "LCUI-Button";
