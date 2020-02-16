const currentPage = location.pathname;
const menuItems = document.querySelectorAll(".links a");

console.log(`pagina atual: ${currentPage}`);

if (menuItems) {
  for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
      // || (currentPage.slice(0, 8) == item.getAttribute("href"))
      item.classList.add("active");
    }
  }
}
