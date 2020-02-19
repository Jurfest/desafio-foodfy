const header = document.querySelector("header");
const items = document.querySelectorAll("header .links a");


if (header) {
    header.classList.add("admin_mode_active");
    console.log(items);
    for (item of items) {
      console.log(item.id);
      if (item.id == "sobre" || item.id == "receitas") {
        changeElementState(item);
      }
    }
}

// hides buttons about and recipes inside header
function changeElementState(el) {
  var display = el.style.display;
  if (display == "none") {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}