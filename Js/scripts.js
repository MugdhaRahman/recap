
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.shop__content__nav__item');

  navItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      navItems.forEach(function (i) {
        i.classList.remove('active');
      });

      item.classList.add('active');
    });
  });
});
