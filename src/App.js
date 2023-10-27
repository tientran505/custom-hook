import "./App.css";
import useStack from "./hooks/useStack";

function Stack({ top, size, stack }) {
  return (
    <figure>
      <article>
        <p>
          <b>Top</b>
        </p>
        <ul>
          {stack.map((item, i) => {
            const isTop = top === item && i === stack.length - 1;
            if (isTop) {
              return <li key={i}>Top: {item}</li>;
            }
            return <li key={i}>Item: {item}</li>;
          })}
        </ul>
      </article>
      <figcaption>{size} items in the stack</figcaption>
    </figure>
  );
}

function App() {
  const { push, pop, clear, top, size, stack } = useStack([1, 2, 3]);

  return (
    <div>
      <header>
        <h1>useStack</h1>
        <div className="btn-group">
          <button className="link" onClick={() => push((top || 0) + 1)}>
            Add
          </button>
          <button disabled={size === 0} className="link" onClick={() => pop()}>
            Pop
          </button>
          <button
            disabled={size === 0}
            className="link"
            onClick={() => clear()}
          >
            Clear
          </button>
        </div>
      </header>
      <Stack stack={stack} size={size()} top={top()} />
    </div>
  );
}

export default App;
