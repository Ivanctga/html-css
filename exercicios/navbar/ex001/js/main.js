var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else {
        ul.classList.add('open');
    }
}

const mode = document.getElementById("mode_icon");

mode.addEventListener("click", () => {
  const form = document.getElementById("container");

  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return;
  }

  mode.classList.remove("fa-sun");
  mode.classList.add("fa-moon");

  form.classList.remove("dark");
});