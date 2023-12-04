/* _back to top */
_top = document.getElementById("_back");

document.addEventListener("scroll", function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    _top.style.display = "block";
  } else {
    _top.style.display = "none";
  };
})

_top.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
