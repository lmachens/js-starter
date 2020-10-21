import "./app.css";
import Header from "./components/Header";

function App() {
  const container = document.createElement("div");
  const header = Header();

  const main = document.createElement("main");
  main.innerText = "Hello World";

  container.append(header, main);
  return container;
}

export default App;
