import { useWindowSize } from "@/hooks/useWindowSize";
import React from "react";
import Confetti from "react-confetti";

export default function ConfettiRain({ show }) {
  const { width, height } = useWindowSize();
  if (!show) return;
  return <Confetti width={width} height={height} />;
}
