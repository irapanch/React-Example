import { Section } from "./components/Section";

function App() {
  const movies = [
    { id: 1, title: "Step up" },
    { id: 2, title: "Taxi" },
  ];
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Section title="Books" />
      <Section data={movies} />
    </div>
  );
}

export default App;
