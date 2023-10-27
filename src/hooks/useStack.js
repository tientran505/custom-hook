import { useState } from "react";

const useStack = (initialData = []) => {
  const [stack, setStack] = useState(initialData);
  const l = stack.length;

  const push = (item) => {
    setStack((prev) => [...prev, item]);
  };

  const pop = () => {
    const lastItem = stack[l - 1];

    setStack((prev) => prev.slice(0, -1));
    return lastItem;
  };

  const clear = () => {
    setStack([]);
  };

  const top = () => {
    return stack[l - 1];
  };

  const size = () => {
    return l;
  };

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
