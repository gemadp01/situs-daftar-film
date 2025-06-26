import Detailpage from "../components/pages/detail/index.js";
import Homepage from "../components/pages/homepage/index.js";

const ROUTES = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
};

export const route = (hash) => {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "";

  const hashRoute = hash === "" ? "home" : hash;
  const isAvailablePage = Object.keys(ROUTES).includes(hashRoute);

  if (isAvailablePage) {
    appContainer.appendChild(ROUTES[hashRoute]);
  } else {
    alert("page not found");
  }

  // if (hash === "") {
  //   // berada di homepage
  //   appContainer.appendChild(ROUTES.home);
  // } else if (hash === "detail") {
  //   // berada di detail
  //   appContainer.appendChild(ROUTES.detail);
  // } else {
  //   // berada di halaman 404 (not found)
  //   alert("page not found");
  // }
};
