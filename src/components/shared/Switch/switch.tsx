import { cn } from "@/utils/cn";
import * as RadixSwitch from "@radix-ui/react-switch";
import { forwardRef } from "react";
import { switchVariants } from "./style";
import { SwitchElement, SwitchProps } from "./types";

export const Switch = forwardRef<SwitchElement, SwitchProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <RadixSwitch.Root
        className={cn(
          switchVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        <RadixSwitch.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0"
          )}
        />
      </RadixSwitch.Root>
    );
  }
);

Switch.displayName = "LCUI-Switch";
