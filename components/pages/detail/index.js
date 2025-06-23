import { route } from "../../../utils/route.js";
import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Detailpage {
  constructor(props) {}

  render() {
    const detailContainer = document.createElement("div");

    const title = new Typography({ variant: "h1", children: "Detailpage" });
    detailContainer.appendChild(title.render());
    const detailButtonNavigate = new Button({
      text: "Navigate to homepage",
      variant: "primary",
      onclick: () => route(""),
    });

    detailContainer.appendChild(detailButtonNavigate.render());
    return detailContainer;
  }
}

export default Detailpage;
