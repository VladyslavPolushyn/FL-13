document.addEventListener('DOMContentLoaded', () => {
	let menuLinks = document.querySelectorAll('.main-header__link');
	let url = window.location.href;

	for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function() {
	    let current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
  	});
	}

});