class Button {
  constructor(props) {
    const { text, variant, onclick, disabled } = props;
    this.handleClick = this.handleClick.bind(this);
    this.variant = variant;
    this.text = text;
    this.onclick = onclick;
    this.disabled = disabled;
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
    button.className = `btn btn-${this.variant}`;
    button.disabled = this.disabled;
    button.addEventListener("click", this.handleClick);
    return button;
  }
}

export default Button;
