import * as SwitchPrimitives from "@radix-ui/react-switch";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef } from "react";
import { switchVariants } from "./style";

export interface SwitchElement
  extends ElementRef<typeof SwitchPrimitives.Root> {}

export interface SwitchProps
  extends ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}
