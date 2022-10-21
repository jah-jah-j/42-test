import {useEffect, useRef, useState} from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  const [isStart, setIsStart] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()

  const runTimeout = () => setIsStart(true)

  useEffect(() => {
    if (isStart) {
      timeout.current = setTimeout(callback, delay);
      return () => clearTimeout(timeout.current);
    }
  }, [isStart, callback, delay]);

  return {runTimeout};
}

