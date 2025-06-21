import Button from "./components/Button/index.js";
import ListComponent from "./components/List/index.js";
import { route } from "./utils/route.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttonProps = {
    text: "submit",
    variant: "primary",
    onclick: () => console.log("passed function called"),
  };
  const button = new Button(buttonProps);
  const myList = new ListComponent({ items: ["item1", "item2", "item3"] });
  document.getElementById("app").appendChild(button.render());
  document.getElementById("app").appendChild(list.render());
  history.replaceState(null, null, "#");
});

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substring(1);
  route(hash);
});
