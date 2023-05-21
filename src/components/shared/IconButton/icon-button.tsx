import useRipple from "@/hooks/useRipple";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import { iconButtonVariants } from "./style";
import { IconButtonElement, IconButtonProps } from "./types";
import { SpinnerIcon } from "@/components/icons/Spinner";

export const IconButton = forwardRef<IconButtonElement, IconButtonProps>(
  (
    {
      children,
      variant,
      size,
      shape,
      shadow,
      ripple = true,
      isLoading = false,
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
          iconButtonVariants({
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
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);

IconButton.displayName = "LCUI-IconButton";
