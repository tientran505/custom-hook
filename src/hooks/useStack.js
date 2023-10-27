import React from 'react'

const useStack = (initalData = []) => {
  
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