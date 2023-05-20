import { CheckIcon } from "@/components/icons/Check";
import { cn } from "@/utils/cn";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import { checkboxVariants } from "./style";
import { CheckboxElement, CheckboxProps } from "./types";

export const Checkbox = forwardRef<CheckboxElement, CheckboxProps>(
  ({ className, variant, hasError, ...props }, ref) => {
    return (
      <RadixCheckbox.Root
        className={cn(
          checkboxVariants({
            variant,
            hasError,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        <RadixCheckbox.Indicator
          className={cn(
            "flex h-full w-full items-center justify-center text-white"
          )}
        >
          <CheckIcon className="h-4 w-4" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  }
);

Checkbox.displayName = "LCUI-Checkbox";
