// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

function toggleMobileMenu(isOpen) {
  var button = document.querySelector('.js-navMobileToggle');
  var nav = document.querySelector('.js-nav');
  if (isOpen === undefined) {
    isOpen = !button.classList.contains('is-open');
  }

  if (isOpen) {
    button.classList.add('is-open');
    nav.classList.add('is-open');
  } else {
    button.classList.remove('is-open');
    nav.classList.remove('is-open');
  }
}