import { forwardRef } from "react";
import { SVGAttributes } from "../types";

const CheckIcon = forwardRef<SVGSVGElement, SVGAttributes>(
  ({ className, color = "currentColor", ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 8"
        fill="none"
        ref={ref}
        className={className}
        {...props}
      >
        <path d="M1 3.49213L3.9026 6.48269L9.22403 1" stroke={color} />
      </svg>
    );
  }
);

CheckIcon.displayName = "LCUI-SVGCheckIcon";

export { CheckIcon };
