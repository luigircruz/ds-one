import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef } from "react";
import { checkboxVariants } from "./style";

export interface CheckboxElement
  extends ElementRef<typeof RadixCheckbox.Root> {}

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof RadixCheckbox.Root>,
    VariantProps<typeof checkboxVariants> {}
