import { useState } from "react";

const useStack = (initialData = []) => {
  const [stack, setStack] = useState(initialData);
  const [top, setTop] = useState([]);

  const push = () => {
    const newStack = [...stack, Math.floor(Math.random() * 10000)];
    setStack(newStack);

    console.log(stack);

    const lastElem = stack.slice(-1);
    setTop(lastElem);
  };

  const pop = () => {
    setStack((prev) => prev.slice(-1));
  };

  const clear = () => {
    setStack([]);
  };

  const size = stack.length;

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
