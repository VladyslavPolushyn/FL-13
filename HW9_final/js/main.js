document.addEventListener('DOMContentLoaded', () => {
	let menuLinks = document.querySelectorAll('.main-header__link');
	let url = window.location.href;
	let scrollLink = document.querySelector('.scroll__link');

	scrollLink.addEventListener('click', function() {
		let current = document.getElementsByClassName('active');
		if(current[0]) {
			current[0].className = current[0].className.replace(' active', '');
			menuLinks[0].className += ' active';
		}
	});


	for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function() {
	    let current = document.getElementsByClassName('active');
	    if(current[0]) {
	    	current[0].className = current[0].className.replace(' active', '');
	    }
	    this.className += ' active';
  	});
	}

	let showPassBtn = document.querySelector('.show-pass-btn');
	let showPassText = document.querySelector('.show-pass-btn__text');
	let showPassImg = document.querySelector('.show-pass-img');


	if(showPassBtn) {
		showPassBtn.onclick = function(e) {
			e.preventDefault();
			if(showPassText.innerHTML === 'show') {
				pass.setAttribute('type', 'text');
				showPassText.innerHTML = 'Hide';
				showPassImg.setAttribute('src', 'img/icons/atoms/icon/a-icon-hidepass.svg');
			}else {
				pass.setAttribute('type', 'password');
				showPassText.innerHTML = 'show';
				showPassImg.setAttribute('src', 'img/icons/atoms/icon/a-icon-showpass.svg');
			}	
		}
	}

	if(document.addEventListener){
    document.addEventListener('invalid', function(e){
        e.target.className += ' invalid';
    }, true);
	}


	let input = document.getElementById('author_search');

	input.onkeyup = function() {
	  let filter, ul, li, a, i, txtValue;
	  filter = input.value.toUpperCase();
	  ul = document.getElementById("author_list");
	  li = document.getElementsByClassName('authors-list__item');

	  for (i = 0; i < li.length; i++) {
	    a = li[i].getElementsByTagName("a")[0];
	    txtValue = a.textContent || a.innerText;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	      li[i].style.display = "";
	    } else {
	      li[i].style.display = "none";
	    }
	  }
	}
	

});