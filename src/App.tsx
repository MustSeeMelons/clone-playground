import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useAtom } from "jotai";
import { counterAtom, stringifiedCounterAtom } from "./state/state";
import { useQuery } from "@tanstack/react-query";

const randomUrl = "https://picsum.photos/v2/list?limit=10";

function App() {
  const [, setCount] = useAtom(counterAtom);
  const [stringifiedCount] = useAtom(stringifiedCounterAtom);

  const { isPending, error, data } = useQuery({
    queryKey: ["random_fetch"],
    queryFn: () => {
      fetch(randomUrl).then((response) => {
        return response.json().then((result) => {
          console.log(result);
          return result;
        });
      });
    },
  });

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
      <h1>Vite + React {isPending ? "is waiting" : ""}</h1>
      <div className="p-8">
        <button
          className="btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          {stringifiedCount}
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
