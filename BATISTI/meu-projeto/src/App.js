import "./App.css";
import imagem from "./logo.svg";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Daniel Paiva" />
      <Pessoa
        nome="Daniel Paiva"
        idade={30}
        profissao="Digitador"
        foto={imagem}
      />
    </div>
  );
}

export default App;
