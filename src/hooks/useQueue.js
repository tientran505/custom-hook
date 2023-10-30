import { useState } from 'react'
const useQueue = (initialData = []) => {
  const [queue, setQueue] = useState(initialData);
  const [top, setTop] = useState(queue[0]);
  const [size, setSize] = useState(queue.length);

  const push = (item) => {
    const newQueue = [...queue, item];
    setQueue(newQueue);
    setSize(newQueue.length);
    setTop(newQueue[0]);
  };
  const pop = () => {
    const fistItem = queue[0];
    const newQueue = queue.slice(1);
    setQueue(newQueue);
    setSize(newQueue.length);
    setTop(newQueue[0]);
    return fistItem;

  }
  const clear = () => {
    setQueue([]);
    setSize(0);
    setTop(undefined);
  };


  return {
    push,
    pop,
    clear,
    top,
    size,
    queue,
  };
};

export default useQueue;
