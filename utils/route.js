export const route = (hash) => {
  if (hash === "") {
    // berada di homepage
    console.log("home page");
  } else if (hash === "detail") {
    // berada di detail
    console.log("detail page");
  } else {
    // berada di halaman 404 (not found)
    console.log("page not found");
  }
};
