import { useContext } from "react";
import { CountContext } from "../context/CountContext";

function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("no context");
  }
  return context;
}
export default useCount;
