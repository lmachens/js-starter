import "./header.css";
import logoSrc from "../assets/logo.png";

function Header() {
  const header = document.createElement("header");
  header.className = "header";
  const logo = document.createElement("img");
  logo.src = logoSrc;
  logo.alt = "Logo";

  header.append(logo);
  return header;
}

export default Header;
