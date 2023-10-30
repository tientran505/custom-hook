import { useState } from 'react'
const useQueue = (initialData = []) => {
  const [queue, setQueue] = useState(initialData);
  const [top, setTop] = useState(queue[queue.length - 1]);
  const [size, setSize] = useState(queue.length);

  const push = (item) => {
    setQueue([...queue, item]);
    setSize(queue.length + 1);
    setTop(item);
  };
  const pop = () => {
    const fistItem = queue[0];
    const newQueue = queue.slice(1);
    setQueue(newQueue);
    setSize(newQueue.length);
    setTop(newQueue[newQueue.length - 1]);
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
