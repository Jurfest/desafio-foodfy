const currentPage = location.pathname;
const menuItems = document.querySelectorAll(".links a");

console.log(`pagina atual: ${currentPage}`);

if (menuItems) {
  for (item of menuItems) {
    if ((currentPage == item.getAttribute("href")) || (currentPage.slice(0, -2) == item.getAttribute("href"))) {
      item.classList.add("active");
    }

    console.log(currentPage.slice(0, -2));

  }
}
