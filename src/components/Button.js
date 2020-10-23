import "./button.css";
import { createElement } from "../utils/elements";

function Button(props) {
  return createElement("button", { className: "button", ...props });
}

export default Button;
