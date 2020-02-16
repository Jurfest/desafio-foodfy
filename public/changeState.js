function Mudarestado(el, btn) {
  var display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';
  else
    document.getElementById(el).style.display = 'none';

  var showOrHide = document.getElementById(btn).textContent;
  if (showOrHide === "MOSTRAR")
    document.getElementById(btn).textContent = 'ESCONDER';
  else
    document.getElementById(btn).textContent = 'MOSTRAR';
}