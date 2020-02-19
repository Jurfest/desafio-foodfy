const currentPage = location.pathname;
const menuItems = document.querySelectorAll(".links a");

if (menuItems) {
  for (item of menuItems) {
    if (currentPage == item.getAttribute("href")) {
      item.classList.add("active");
    } 
  }
}
