import { useCallback, useMemo, useState } from "react";

const useStack = (initalData = []) => {
  let [stack, setStack] = useState(initalData);

  let top = useMemo(() => stack[stack.length - 1] || 0, [stack]);

  let size = useMemo(() => stack.length, [stack.length]);

  let push = useCallback((val) => {
    setStack((prev) => [...prev, val]);
  }, []);

  let pop = useCallback(() => {
    setStack((prev) => {
      prev.pop();
      return [...prev];
    });
  }, []);

  let clear = useCallback(() => {
    setStack([]);
  }, []);

  return {
    push,
    pop,
    clear,
    top,
    size,
    stack,
  };
};

export default useStack;
