// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if (!btn) {
    return;
  }
  btn.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      callback();
    },
    false
  );
}

function toggleMobileMenu(isOpen) {
  var button = document.querySelector(".js-navMobileToggle");
  var nav = document.querySelector(".js-nav");
  if (isOpen === undefined) {
    isOpen = !button.classList.contains("is-open");
  }

  if (isOpen) {
    button.classList.add("is-open");
    nav.classList.add("is-open");
    document.documentElement.classList.add("is-mobileMenu-open");
  } else {
    button.classList.remove("is-open");
    nav.classList.remove("is-open");
    document.documentElement.classList.remove("is-mobileMenu-open");
  }
}

function highlightActiveNavLink() {
  var anchors = document.querySelectorAll(".Nav-list-item a");
  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    if (
      anchor.getAttribute("href") ===
      document.location.pathname.replace(/([^^])\/$/, "$1")
    ) {
      anchor.classList.add("active");
    }
  }
}

var button = document.querySelector(".js-navMobileToggle");
button.addEventListener("click", function (event) {
  toggleMobileMenu();
});
highlightActiveNavLink();
