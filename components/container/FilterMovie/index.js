import Button from "../../UI/button/index.js";
import Select from "../../UI/select/index.js";

class FilterMovie {
  constructor(props) {
    const { submitFilter, isLoading } = props;
    this.filterContainer = document.createElement("div");
    this.submitFilter = submitFilter;
    this.isLoading = isLoading;
  }

  render() {
    this.filterContainer.className = "filter-container";
    const homeButtonSearch = new Button({
      text: "Search",
      variant: "primary",
      onclick: () => this.submitFilter(),
      disabled: this.isLoading,
    });
    this.filterContainer.appendChild(
      new Select({
        options: [
          { value: "movie", text: "Movie" },
          { value: "Short", text: "Short" },
        ],
        selectedValue: "title",
        onChange: (value) => console.log(value),
        width: "100px",
      }).render()
    );
    this.filterContainer.appendChild(
      new Select({
        options: [
          { value: "2024", text: "2024" },
          { value: "2023", text: "2023" },
          { value: "2022", text: "2022" },
          { value: "2021", text: "2021" },
          { value: "2020", text: "2020" },
        ],
        selectedValue: "title",
        onChange: (value) => console.log(value),
        width: "200px",
      }).render()
    );
    this.filterContainer.appendChild(homeButtonSearch.render());
    return this.filterContainer;
  }
}

export default FilterMovie;
