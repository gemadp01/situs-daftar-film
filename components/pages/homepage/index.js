import { fetchApi } from "../../../utils/fetchApi.js";
import { route } from "../../../utils/route.js";
import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
    };
    this.homeContainer = document.createElement("div");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  getDataMovie() {
    fetchApi("GET", "titles/x/upcoming").then((result) => console.log(result));
  }

  render() {
    this.homeContainer.innerHTML = "";
    // console.log(fetchApi("GET", "titles/x/upcoming"));
    this.getDataMovie();
    const title = new Typography({ variant: "h1", children: "Homepage" });
    this.homeContainer.appendChild(title.render());
    const homeButtonNavigate = new Button({
      text: "Navigate to detail page",
      variant: "primary",
      onclick: () => route("detail"),
    });

    this.homeContainer.appendChild(homeButtonNavigate.render());
    this.homeContainer.appendChild(
      new Typography({
        variant: "p",
        children: "Counter: " + this.state.count,
      }).render()
    );
    this.homeContainer.appendChild(
      new Button({
        text: "add",
        variant: "primary",
        onclick: () => this.setState({ count: this.state.count + 1 }),
      }).render()
    );
    this.homeContainer.appendChild(
      new Button({
        text: "subtract",
        variant: "primary",
        onclick: () => this.setState({ count: this.state.count - 1 }),
      }).render()
    );
    return this.homeContainer;
  }
}

export default Homepage;
