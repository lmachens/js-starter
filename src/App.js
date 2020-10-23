import "./app.css";
import Button from "./components/Button";
import AppBar from "./components/AppBar";
import { Component, styled } from "./utils/elements";

const PrimaryButton = styled(Button, "bg-primary");
const Main = Component("main", {
  innerText: "👋",
});
const Container = Component("div");

function App() {
  return Container({
    children: [
      AppBar(),
      Main(),
      Button({ innerText: "Hello" }),
      PrimaryButton({ innerText: "World" }),
    ],
  });
}

export default App;
