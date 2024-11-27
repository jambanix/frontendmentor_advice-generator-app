import { useState, useRef, useEffect } from "react";

export const AdviceQuote = ({ advice }) => {

  const [displayText, setDisplayText] = useState("");
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (advice !== displayText) {
      timer = setTimeout(() => {
        if (advice !== undefined) {
          setDisplayIndex(prev => prev + 1);
          setDisplayText(prev => advice.slice(0, displayIndex));
        }}, 10);
    }
    else setDisplayIndex(prev => 0);
    
    return () => clearTimeout(timer);
  }, [displayText, advice])

  return (
    <blockquote className="text-light-cyan text-3xl font-semibold">
      {advice ? <q>{displayText}</q> : <q></q>}
    </blockquote>
  );
};
