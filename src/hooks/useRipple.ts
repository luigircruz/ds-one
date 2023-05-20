import { MouseEvent, useState } from "react";

const useRipple = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(50);

  const findFurthestPoint = (
    clickPointX: number,
    elementWidth: number,
    offsetX: number,
    clickPointY: number,
    elementHeight: number,
    offsetY: number
  ): number => {
    setX(clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth);
    setY(clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight);
    setZ(Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY)));

    return z;
  };

  const applyStyles = (
    element: HTMLElement,
    color: string,
    rect: DOMRect,
    radius: number,
    event: MouseEvent
  ): void => {
    element.classList.add("ripple");
    element.style.backgroundColor =
      color === "dark" ? "rgba(0,0,0, 0.2)" : "rgba(255,255,255, 0.3)";
    element.style.borderRadius = "50%";
    element.style.pointerEvents = "none";
    element.style.position = "absolute";
    element.style.left = `${event.clientX - rect.left - radius}px`;
    element.style.top = `${event.clientY - rect.top - radius}px`;
    element.style.width = `${radius * 2}px`;
    element.style.height = `${radius * 2}px`;
  };

  const applyAnimation = (element: HTMLElement): void => {
    element.animate(
      [
        {
          transform: "scale(0)",
          opacity: 1,
        },
        {
          transform: "scale(1.5)",
          opacity: 0,
        },
      ],
      {
        duration: 400,
        easing: "linear",
      }
    );
  };

  const createRipple = (event: MouseEvent, color: string): void => {
    const element = event.currentTarget as HTMLElement;

    element.style.position = "relative";
    element.style.overflow = "hidden";

    const rect = element.getBoundingClientRect();

    const radius = findFurthestPoint(
      event.clientX,
      element.offsetWidth,
      rect.left,
      event.clientY,
      element.offsetHeight,
      rect.top
    );

    const circle = document.createElement("span");

    applyStyles(circle, color, rect, radius, event);
    applyAnimation(circle);

    element.appendChild(circle);

    setTimeout(() => circle.remove(), 400);
  };

  return { createRipple };
};

export default useRipple;
