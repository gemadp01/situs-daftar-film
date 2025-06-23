import { route } from "../../../utils/route.js";
import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
    };
  }

  render() {
    const homeContainer = document.createElement("div");

    const title = new Typography({ variant: "h1", children: "Homepage" });
    homeContainer.appendChild(title.render());
    const homeButtonNavigate = new Button({
      text: "Navigate to detail page",
      variant: "primary",
      onclick: () => route("detail"),
    });

    homeContainer.appendChild(homeButtonNavigate.render());
    homeContainer.appendChild(
      new Typography({
        variant: "p",
        children: "Counter: " + this.state.count,
      }).render()
    );
    return homeContainer;
  }
}

export default Homepage;
