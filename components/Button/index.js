class Button {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    this.variant = "primary";
  }

  handleClick() {
    if (this.variant === "primary") {
      console.log("primary button clicked!");
      this.variant = "secondary";
    } else {
      console.log("button clicked!");
      this.variant = "primary";
    }
  }

  render() {
    const button = document.createElement(`button`);
    button.innerText = "Click me";
    button.addEventListener("click", this.handleClick);
    return button;
  }
}

export default Button;
