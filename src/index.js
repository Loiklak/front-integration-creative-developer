document.getElementById("scroll-down").addEventListener("click", scrollDown);
document.getElementById("scroll-up").addEventListener("click", scrollUp);

function scrollDown() {
  const windowHeight = window.innerHeight;
  window.scrollBy({
    top: windowHeight,
    left: 0,
    behavior: "smooth",
  });
}

function scrollUp() {
  const windowHeight = window.innerHeight;
  window.scrollBy({
    top: -windowHeight,
    left: 0,
    behavior: "smooth",
  });
}
