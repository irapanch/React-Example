import { Button } from "./components/Button";
import { Section } from "./components/Section";

function App() {
  const movies = [
    { id: 1, title: "Step up" },
    { id: 2, title: "Taxi" },
    { id: 3, title: "Flexi" },
    { id: 4, title: "Route" },
  ];
  const btns = ["get", "push", "patch", "delete"];
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Button titleBtn="Login" />
      <Button titleBtn="Password" />
      <Button titleBtn="add" />
      <Section data={movies} />
      <Section data={movies} />
      {btns.map((btn) => (
        <Button key={btn} titleBtn={btn} />
      ))}
    </div>
  );
}

export default App;
