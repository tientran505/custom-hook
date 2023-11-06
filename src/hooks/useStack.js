import { useState, useCallback } from 'react'

const useStack = (initalData = []) => {
  const [data, setData] = useState(initalData);

  const push = useCallback((item) => {
    setData((prevData) => [...prevData, item]);
  }, []);

  const top = data.length > 0 ? data[data.length - 1] : null

  const pop = () => {
    if (data.length > 0) {
      setData(data.slice(0, -1))
    }
  }
  
  const clear = () => {
    setData([])
  }

  const size = data.length

  const stack = data

  return {
    push,
    pop,
    clear,
    top,
    size,
    stack
  }
}

export default useStack
