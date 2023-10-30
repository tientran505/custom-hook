import './App.css';
import useQueue from './hooks/useQueue';

function Queue({ top, size, queue }) {
  return (
    <figure>
      <article>
        <p>
          <b>Top</b>
        </p>
        <ul>
          {queue.map((item, i) => {
            const isTop = top === item;

            if (isTop) {
              return <li key={i}>Top: {item}</li>;
            }
            return <li key={i}>Item: {item}</li>;
          })}
        </ul>
      </article>
      <figcaption>{size} items in the queue</figcaption>
    </figure>
  );
}

function App() {
  const { push, pop, clear, top, size, queue } = useQueue([1, 2, 3]);

  return (
    <div>
      <header>
        <h1>useQueue</h1>
        <div className='btn-group'>
          <button className='link' onClick={() => push((top || 0) + 1)}>
            Add
          </button>
          <button
            disabled={size === 0}
            className='link'
            onClick={() => pop()}
          >
            Pop
          </button>
          <button
            disabled={size === 0}
            className='link'
            onClick={() => clear()}
          >
            Clear
          </button>
        </div>
      </header>
      <Queue queue={queue} size={size} top={top} />
    </div>
  );
}

export default App;
