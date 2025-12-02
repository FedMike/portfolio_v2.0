function mobileNav() {
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.addEventListener('click', function (event) {
		event.stopPropagation();
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	});

	nav.addEventListener('click', function (event) {
		event.stopPropagation();
	});

	document.addEventListener('click', function () {
		if (nav.classList.contains('mobile-nav--open')) {
			nav.classList.remove('mobile-nav--open');
			menuIcon.classList.remove('nav-icon--active');
			document.body.classList.remove('no-scroll');
		}
	});

	// Закрытие при клике на ссылки
	const navLinks = document.querySelectorAll('.mobile-nav__list a');
	navLinks.forEach(link => {
		link.addEventListener('click', function () {
			nav.classList.remove('mobile-nav--open');
			menuIcon.classList.remove('nav-icon--active');
			document.body.classList.remove('no-scroll');
		});
	});
}

export default mobileNav;
