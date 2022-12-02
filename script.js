document.querySelectorAll(".faq").forEach(function(faq) {

  faq.onclick = function() {
    faq.classList.toggle("active");
    faq.classList.toggle("rotate");
    faq.classList.toggle("dark-bold");
  };
});
