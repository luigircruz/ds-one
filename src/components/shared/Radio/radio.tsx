import { cn } from "@/utils/cn";
import * as RadixRadio from "@radix-ui/react-radio-group";
import { forwardRef } from "react";
import { radioVariants } from "./style";
import {
  RadioElement,
  RadioGroupElement,
  RadioGroupProps,
  RadioProps,
} from "./types";

export const RadioGroup = forwardRef<RadioGroupElement, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixRadio.Root
        className={cn("grid gap-2", className)}
        {...props}
        ref={ref}
      />
    );
  }
);
RadioGroup.displayName = "LCUI-RadioGroup";

export const Radio = forwardRef<RadioElement, RadioProps>(
  ({ className, variant, hasError, ...props }, ref) => {
    return (
      <RadixRadio.Item
        ref={ref}
        className={cn(
          radioVariants({
            variant,
            hasError,
            className,
          })
        )}
        {...props}
      >
        <RadixRadio.Indicator className="flex h-full w-full items-center justify-center after:block after:rounded-full after:content-['']" />
      </RadixRadio.Item>
    );
  }
);
Radio.displayName = "LCUI-Radio";
