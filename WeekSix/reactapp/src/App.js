import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [country, setCountry] = useState("");

  const toLight = () => setTheme("light");
  const toDark = () => setTheme("dark");

  useEffect(() => {
    (async function () {
      const res = await fetch("https://restcountries.com/v2/name/nepal");
      const data = await res.json();
      setCountry(data[0].name);
    })();
  }, []);
  return (
    //React fragment
    <>
      <div className={theme}>
        {theme === "light" ? (
          <button onClick={toDark}>Change to Dark</button>
        ) : (
          <button onClick={toLight}>Change to light</button>
        )}
      </div>
      {country === "" ? (
        <div> Loading......</div>
      ) : (
        <div>My country name is {country}</div>
      )}
    </>
  );
}

export default App;
