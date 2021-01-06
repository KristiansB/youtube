
document.querySelector(".dropdown").addEventListener("click", function () {
  document.querySelector('.side-menu').classList.add("active");
  
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
});