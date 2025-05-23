import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Converts vw (viewport width) units to a pixel string like "14px",
 * clamped between 10px and 20px.
 * @param vw number representing vw (e.g., 5 for 5vw)
 */
export const vw = (vw: number): string => {
  const px = (vw / 100) * width;
  const clamped = clamp(px, 10, 18);
  return `${clamped}px`;
};

// export const space = (vw: number): string => {
//   const px = (vw / 100) * width;
//   return `${px}px`;
// };
