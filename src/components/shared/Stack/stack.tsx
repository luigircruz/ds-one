import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import { stackVariants } from "./style";
import { StackElement, StackProps } from "./types";

export const Stack = forwardRef<StackElement, StackProps>(
  (
    {
      children,
      orientation,
      justify,
      align,
      wrap,
      gap,
      flex,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          stackVariants({
            orientation,
            justify,
            align,
            wrap,
            gap,
            flex,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = "LCUI-Stack";

export const HStack = forwardRef<StackElement, StackProps>(
  (
    {
      children,
      orientation = "row",
      justify,
      align,
      wrap,
      gap,
      flex,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          stackVariants({
            orientation,
            justify,
            align,
            wrap,
            gap,
            flex,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HStack.displayName = "LCUI-HStack";

export const VStack = forwardRef<StackElement, StackProps>(
  (
    {
      children,
      orientation = "column",
      justify,
      align,
      wrap,
      gap,
      flex,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          stackVariants({
            orientation,
            justify,
            align,
            wrap,
            gap,
            flex,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

VStack.displayName = "LCUI-VStack";
