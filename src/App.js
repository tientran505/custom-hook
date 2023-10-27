import './App.css';
import { useQueue } from '@uidotdev/usehooks';

function QueueDemo({ first, last, size, queue }) {
  return (
    <figure>
      <article>
        <p>
          <b>Top</b>
        </p>
        <ul>
          {queue.map((item, i) => {
            const isFirst = first === item;
            const isLast = last === item;

            if (isFirst) {
              return <li key={i}>Top: {item}</li>;
            }
            if (isLast) {
              return <li key={i}>Bottom: {item}</li>;
            }
            return <li key={i}>Item: {item}</li>;
          })}
        </ul>
        <p>
          <b>Bottom</b>
        </p>
      </article>
      <figcaption>{size} items in the stack</figcaption>
    </figure>
  );
}

function App() {
  const { add, remove, clear, first, last, size, queue } = useQueue([1, 2, 3]);

  return (
    <div>
      <header>
        <h1>useStack</h1>
        <div className='btn-group'>
          <button className='link' onClick={() => add((last || 0) + 1)}>
            Add
          </button>
          <button
            disabled={size === 0}
            className='link'
            onClick={() => remove()}
          >
            Remove
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
      <QueueDemo queue={queue} size={size} first={first} last={last} />
    </div>
  );
}

export default App;
