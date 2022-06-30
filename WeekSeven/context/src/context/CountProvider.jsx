import { useState } from "react";
import { CountContext } from "./CountContext";

export default function CountProvider(props) {
  const value = useState(0);
  return (
    <CountContext.Provider value={{ value, greeting: "hello" }} {...props} />
  );
}
