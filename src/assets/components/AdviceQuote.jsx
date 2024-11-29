import { useState, useRef, useEffect } from "react";

export const AdviceQuote = ({ advice }) => {
  return (
    <blockquote className="text-light-cyan text-3xl font-semibold">
      {advice ? <q>{advice}</q> : <q></q>}
    </blockquote>
  );
};
