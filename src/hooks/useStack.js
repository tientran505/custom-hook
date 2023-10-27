import { useCallback, useMemo, useState } from "react";

const useStack = (initalData = []) => {
  let [stack, setStack] = useState(initalData);

  let top = useMemo(() => stack[0] || 0, [stack]);

  let size = useMemo(() => stack.length, [stack.length]);

  let push = useCallback(
    (val) => {
      setStack((prev) => [...prev, size - 1 + val]);
    },
    [size]
  );

  let pop = useCallback(() => {
    stack.pop();
    setStack(() => [...stack]);
  }, [stack]);

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
