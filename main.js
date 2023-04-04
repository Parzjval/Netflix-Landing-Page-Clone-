const tabItems = document.querySelectorAll(".tab-item");
const contentItems = document.querySelectorAll(".tab-content-item");

//Select tab content item
function selectItem() {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const grabContentItem = document.querySelector(`#${this.id}-content`);
  grabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabItems.forEach((item) => item.classList.remove("show"));
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
