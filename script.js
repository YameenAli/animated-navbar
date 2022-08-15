
let linkItems = document.getElementsByTagName("li");
let selector = document.getElementById("selector");

selector.style.left = 3 * 50 - 50 + "px";

for (let linkItem of linkItems) {
linkItem.addEventListener("click", (e) => {
let listNum = e.target.dataset.list;
selector.style.left = listNum * 50 - 50 + "px";
event.target.classList.add("active");

// remove active class from other links
for (let linkItem of linkItems) {
  if (linkItem.dataset.list !== listNum) {
    linkItem.classList.remove("active");
  }
}
});
}

