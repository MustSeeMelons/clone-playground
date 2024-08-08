import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { atom, useAtom } from "jotai";
import { counterAtom, stringifiedCounterAtom } from "./state/state";
import { useQuery } from "@tanstack/react-query";
import { IRandomPicsum } from "./api/api";
import { useMemo } from "react";

// If we wish to stretch some transaction
const _pause = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 500);
  });
};

// Default pc count to load, to avoid a layout shift, more can be loaded later
const defPicCount = 10;
const randomUrl = `https://picsum.photos/v2/list?limit=${defPicCount}`;

function App() {
  const [, setCount] = useAtom(counterAtom);

  const randomPicAtom = useMemo(() => {
    // TODO setup states for img loading states
    const picAtom = atom<IRandomPicsum[]>(
      new Array(defPicCount).fill(undefined)
    );

    return picAtom;
  }, []);

  const [picData, setPicData] = useAtom(randomPicAtom);

  const [stringifiedCount] = useAtom(stringifiedCounterAtom);

  // Initial data load
  const { error, data } = useQuery<IRandomPicsum[]>({
    queryKey: ["random_fetch"],
    retry: false,
    queryFn: async () => {
      return fetch(randomUrl).then(async (response) => {
        return response.json().then(async (result) => {
          setPicData(result);
          return result;
        });
      });
    },
  });

  // XXX we could use intersection observer to load more when the user scrolls

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
      <h1>
        Vite + React
        {error ? `${error.message}` : ""}
      </h1>
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
      {/* TODO extract pics into seperate rendering funcion */}
      <div className="grid grid-cols-3 gap-3 py-5">
        {!picData.some((e) => !e) &&
          picData.map((d) => {
            // TODO callback that image is loaded, set class for image to fade in
            return <img key={d.url} src={d.download_url} onLoad={() => {}} />;
          })}
      </div>
    </>
  );
}

export default App;
