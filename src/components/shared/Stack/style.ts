import { cva } from "class-variance-authority";

const stackVariants = cva("flex", {
  variants: {
    orientation: {
      row: "flex-row",
      column: "flex-col",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      reverse: "flex-wrap-reverse",
    },
    gap: {
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
      12: "gap-12",
      16: "gap-16",
      20: "gap-20",
    },
    flex: {
      initial: "flex-initial",
      1: "flex-1",
      2: "flex-2",
    },
  },
  defaultVariants: {
    orientation: "row",
    justify: "start",
    flex: "initial",
  },
});

export { stackVariants };
