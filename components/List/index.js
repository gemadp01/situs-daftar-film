class ListComponent {
  constructor() {
    this.listItems = ["item 1", "item 2", "item 3"];
  }

  render() {
    const ul = document.createElement("ul");
    this.listItems.map((item) => {
      const li = document.createElement("li");
      li.innerText = item;
      ul.appendChild(li);
    });
    return ul;
  }
}

export default ListComponent;
