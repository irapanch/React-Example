import { Button } from "./components/Button";
import { Modal } from "./components/Modal/Modal";
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
      <hr></hr>
      <h2>{isOnline && "Online"}</h2>
      {!isOnline && <h2>Offline</h2>}
      <hr></hr>
      {/* <Button titleBtn="Login" />
      <Button titleBtn="Password" />
      <Button titleBtn="add" /> */}
      <Section title="Movie1" data={movies} />
      <Section title="Movie2" data={movies} />
      <hr></hr>
      {btns.map((btn) => (
        <Button key={btn} titleBtn={btn}>
          {" "}
          Hello
        </Button>
      ))}
      <hr></hr>
      <Modal>
        <Button>Hello from Modal</Button>
        <h1>React </h1>
      </Modal>
      <Modal>
        em Eligendi minima consequatur laboriosam odit quibusdam, esse magnam
        nostrum voluptatem, velit est earum nemo omnis animi repudiandae iste
        facere! Eos autem et vitae nam ducimus doloremque quasi, id adipisci
        aliquid. Aspernatur expedita ipsa vero cumque, obcaecati soluta quod
        odio facere dolores impedit architecto eligendi laboriosam qui
        cupiditate voluptates odit
      </Modal>
      <Modal>
        <img src="https://react.dev/images/og-home.png" alt="react" />
      </Modal>
    </div>
  );
}

export default App;
