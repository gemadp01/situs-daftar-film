import Button from "./components/Button/index.js";
import ListComponent from "./components/List/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = new Button();
  const list = new ListComponent();
  document.getElementById("app").appendChild(button.render());
  document.getElementById("app").appendChild(list.render());
});
