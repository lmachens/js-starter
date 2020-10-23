import "./appBar.css";
import logoSrc from "../assets/logo.png";
import { Component } from "../utils/elements";

const Logo = Component("img");
const Header = Component("header", {
  className: "header",
});

function AppBar() {
  return Header({
    children: [
      Logo({
        src: logoSrc,
        alt: "Logo",
      }),
    ],
  });
}

export default AppBar;
