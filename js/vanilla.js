console.dir(document);

// const title = document.getElementById("title")

// const btn = document.getElementsByClassName("btn")

// console.log(btn)

const title = document.querySelector("#title");
const btn = document.querySelector(".btn");

// title.innerText = 'DOM is a tree like structure'

// title.style.color  = 'red'
// title.style.fontSize = '40px'
// console.dir(title)

btn.addEventListener("click", function () {
  title.innerText = "DOM is a tree like structure";
  title.style.color = "red";
});
