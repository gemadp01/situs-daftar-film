class Button {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked");
  }

  render() {
    const button = document.createElement(`button`);
    button.innerText = "Click me";
    button.addEventListener("click", this.handleClick);
    return button;
  }
}
