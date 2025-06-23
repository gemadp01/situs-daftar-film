class Button {
  constructor(props) {
    const { text, variant, onclick } = props;
    this.handleClick = this.handleClick.bind(this);
    this.variant = variant;
    this.text = text;
    this.onclick = onclick;
  }

  handleClick() {
    if (this.onclick) {
      this.onclick();
    } else {
      console.log("button clicked");
    }
  }

  render() {
    const button = document.createElement(`button`);
    button.innerText = this.text;
    button.addEventListener("click", this.handleClick);
    return button;
  }
}

export default Button;
