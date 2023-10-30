import { useState } from 'react'

const useQueue = (initialData = []) => {
	const [queue, setQueue] = useState(initialData)

	const push = (item) => {
		setQueue([...queue, item])
	}

	const pop = () => {
		const topElement = queue[0]
		setQueue(queue.slice(1))

		return topElement
	}

	const clear = () => {
		setQueue([])
	}

	return {
		push,
		pop,
		clear,
		top: queue[0],
		size: queue.length,
		queue,
	}
}

export default useQueue
