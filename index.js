import { route } from "./utils/route.js";

const handleHash = () => {
  const hash = window.location.hash.substring(1);
  console.log(hash);
  route(hash);
};

document.addEventListener("DOMContentLoaded", () => {
  // set to default hash
  history.replaceState(null, null, "#");
  handleHash();
});

window.addEventListener("hashchange", handleHash);
