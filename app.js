const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
function updateProgress(barId) {
	let progress = 0;
	function increaseProgress() {
		if (progress < 100) {
			progress += 10;
			document.getElementById(barId).style.width = progress + "%";
			document.getElementById(barId).textContent = progress + "%";
			setTimeout(increaseProgress, 1000);
		}
	}
	increaseProgress();
}

updateProgress("progress-bar1");
setTimeout(() => updateProgress("progress-bar2"), 500);
setTimeout(() => updateProgress("progress-bar3"), 1000);