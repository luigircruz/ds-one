import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { iconButtonVariants } from "./style";

export interface IconButtonElement extends HTMLButtonElement {}

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  ripple?: boolean;
  isLoading?: boolean;
}
