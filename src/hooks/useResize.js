import { useEffect, useState } from "react";

const useResize = () => {
  const [width, setWith] = useState(window.innerWidth);
  useEffect(() => {
    const getWidth = () => setWith(window.innerWidth);
    getWidth();
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return width;
};

export default useResize;