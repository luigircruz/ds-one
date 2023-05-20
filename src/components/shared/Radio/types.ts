import * as RadixRadio from "@radix-ui/react-radio-group";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef } from "react";
import { radioVariants } from "./style";

export interface RadioGroupElement extends ElementRef<typeof RadixRadio.Root> {}
export interface RadioElement extends ElementRef<typeof RadixRadio.Item> {}

export interface RadioGroupProps
  extends ComponentPropsWithoutRef<typeof RadixRadio.Root> {}

export interface RadioProps
  extends ComponentPropsWithoutRef<typeof RadixRadio.Item>,
    VariantProps<typeof radioVariants> {}
