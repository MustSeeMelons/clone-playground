import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="columns-2 flex justify-center">
        <a className="self-end" href="https://vitejs.dev" target="_blank">
          {/* XXX will-change-filter was in the CSS */}
          <img
            src={viteLogo}
            className="logo transition-shadow p-6 h-36 hover:drop-shadow-logoVite"
            alt="Vite logo"
          />
        </a>
        <a className="self-start" href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="motion-safe:animate-logoSpin transition-shadow p-6 h-36 hover:drop-shadow-logoReact"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-8">
        <button
          className="btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="py-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
