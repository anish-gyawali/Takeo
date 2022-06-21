import CreateBook, { NamedFunction } from "./components/CreateBook";

function App() {
  return (
    <div>
      React app Component
      <NamedFunction name={"named function "} />
      <CreateBook title={"page to create book"} />
    </div>
  );
}

export default App;
