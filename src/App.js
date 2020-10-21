import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const main = createElement("main", {
    innerText: "👋",
  });

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
