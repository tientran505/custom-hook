import { useState } from 'react';

const useQueue = (initialData = []) => {
  const [queue, setQueue] = useState(initialData);

  const push = (item) => {
    setQueue(prevQueue => [...prevQueue, item]);
  };

  const pop = () => {
    if (queue.length > 0) {
      setQueue(prevQueue => prevQueue.slice(1));
    }
  };

  const clear = () => {
    setQueue([]);
  };

  const top = () => {
    return queue.length > 0 ? queue[0] : null;
  };

  const size = () => {
    return queue.length;
  };

  return { push, pop, clear, top: top(), size: size(), queue };
};

export default useQueue;