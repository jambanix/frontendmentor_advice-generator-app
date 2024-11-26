import { useEffect, useState } from "react";

const getWidth = () => window.innerWidth;

export const useScreenWidth = () => {

  const [width, setWidth] = useState(getWidth());

  const handleWidthChange = () => setWidth(width => getWidth());

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, []);

  return width < 768 ? "mobile" : "desktop";
}