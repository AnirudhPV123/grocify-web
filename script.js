let menu_icon = document.getElementById("menu-icon");
let close_icon = document.getElementById("close-icon");
let menu_links = document.getElementById("menu-links");
let menu_ul = document.getElementById("menu-links-container");

menu_icon.onclick = function () {
  document.getElementById("menu-links").style.right = 0;
};

menu_links.onclick = function () {};
menu_ul.onclick = function () {};

close_icon.onclick = function () {
  document.getElementById("menu-links").style.right = "-50%";
};

document.onclick = function (e) {
  if (!menu_icon.contains(e.target) && !menu_links.contains(e.target))
    document.getElementById("menu-links").style.right = "-50%";
};

menu_ul.onclick = function () {
  document.getElementById("menu-links").style.right = "-50%";
};
