import { atom } from "jotai";

export const counterAtom = atom(0);
export const stringifiedCounterAtom = atom(
  (get) => `The counter is ${get(counterAtom)}`
);

export const isSomethingAtom = atom(false);
// Read only atom
export const stringSomethingAtom = atom((get) => {
  return `${get(isSomethingAtom) ? "True" : "False"}`;
});
// Write only atom
export const somethingAtom = atom(null, (_get, set) => {
  set(isSomethingAtom, false);
});
// Write/read atom
export const defAtom = atom(
  (get) => {},
  (get, set) => {}
);
