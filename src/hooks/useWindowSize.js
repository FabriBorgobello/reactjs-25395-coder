import { useState, useEffect } from "react";

// CUSTOM HOOK: (DEBE INICIAR CON 'use...')
// Sirven para reutilizar lógica en nuestros componentes. Pueden usar otros hooks adentro de ellos (useState, useEffect, etc)
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
