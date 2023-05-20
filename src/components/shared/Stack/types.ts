import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { stackVariants } from "./style";

export interface StackElement extends HTMLDivElement {}

export interface StackProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}
