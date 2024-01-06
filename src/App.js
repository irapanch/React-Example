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
  const isOnline = false;
  return (
    <div className="App">
      <h1>{!isOnline ? "Hello my friend" : "Let`s login"}</h1>
      <h2>{isOnline && "Online"}</h2>
      {!isOnline && <h2>Offline</h2>}
      {/* <Button titleBtn="Login" />
      <Button titleBtn="Password" />
      <Button titleBtn="add" /> */}
      <Section data={movies} />
      <Section data={movies} />
      {btns.map((btn) => (
        <Button key={btn} titleBtn={btn}>
          {" "}
          Hello
        </Button>
      ))}
    </div>
  );
}

export default App;
