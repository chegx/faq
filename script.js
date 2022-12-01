



document.querySelectorAll("button").forEach(function(btn) {

  btn.onclick = function() {
    var index = this.getAttribute("id");
      this.classList.toggle("dark-bold");
    document.querySelectorAll(".arrow")[index].classList.toggle("rotate");

    document.querySelectorAll('span')[index].classList.toggle("show");
  };
});
