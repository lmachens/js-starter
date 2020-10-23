import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
import { createElement, styled } from "./utils/elements";

const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const header = Header();

  const main = createElement("main", {
    innerText: "👋",
  });

  const container = createElement("div", {
    children: [
      header,
      main,
      Button({ innerText: "Hello" }),
      PrimaryButton({ innerText: "World" }),
    ],
  });
  return container;
}

export default App;
