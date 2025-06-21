import Button from "./components/Button/index.js";
import ListComponent from "./components/List/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttonProps = {
    text: "submit",
    variant: "primary",
    onclick: () => console.log("passed function called"),
  };
  const button = new Button(buttonProps);
  const list = new ListComponent({ items: ["item1", "item2", "item3"] });
  document.getElementById("app").appendChild(button.render());
  document.getElementById("app").appendChild(list.render());
});
