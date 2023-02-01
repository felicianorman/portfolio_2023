import axios from "axios";

axios
  .get("https://api.github.com/users/felicianorman/repos")
  .then((response) => {
    createHTML(response.data);
  });

function createHTML(github) {
  console.log(github[1]);

  let bookAPIh2 = document.getElementById("graphQL_h2") as HTMLHeadingElement;
  bookAPIh2.innerHTML = github[1].name;

}
