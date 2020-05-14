const root = document.getElementById('root');
let books = JSON.parse(localStorage.getItem('booksArr'));

createTree(root, books);
// https://www.youtube.com/watch?v=sAjAUmtGylY   //////////////////////////////

let dynamicSection = createElem('section', 'dynamic-section');
root.append(dynamicSection);


let bookHeadingArr = document.querySelectorAll('.book-heading');
let editBtnArr = document.querySelectorAll('.edit-btn');
let addBtn = document.querySelector('.add-btn');

function updateState(state) {
	if(!state) {
		return;
	}
	//HZ
}

window.addEventListener('popstate', function(e){
	updateState(e.state);
});

setPushState(bookHeadingArr);
setPushState(editBtnArr);

addBtn.onclick = function(e) {
	let state;
	state = {
		page: e.target.getAttribute('href')
	}
	history.pushState(state, '', state.page);
	e.preventDefault();
}

function setPushState(element) {
	element.forEach(function(elem) {
		elem.onclick = function(e) {
			let state;
			state = {
				page: e.target.getAttribute('href')
			}
			history.pushState(state, '', state.page);
			e.preventDefault();

			renderDynamic();
		}
	});
}


function renderDynamic() {
	let bookId = Number(location.search.split('?id=')[1]);
	let currentHash = location.hash.split('#')[1];

	if(currentHash === 'preview') {
		renderPreview(bookId);
	}else if(currentHash === 'edit') {
		renderEdit(bookId);
	}

}

function renderPreview(id) {
	dynamicSection.innerHTML = '';

	let bookName = createElem('h2', 'preview-name', books[id-1].name);
	let author = createElem('h3', 'preview-author', books[id-1].author);
	let image = createElem('img', 'book-img');
	image.setAttribute('src', books[id-1].image);
	let plot = createElem('p', 'plot', books[id-1].plot);

	dynamicSection.append(bookName, author, image, plot);

}

function renderEdit(id) {
	dynamicSection.innerHTML = '';

	let editForm = createElem('form', 'edit-form');

	let nameInput = createElem('input', 'name-input');
	nameInput.value = books[id-1].name;
	nameInput.setAttribute('required', 'true');

	let authorInput = createElem('input', 'author-input');
	authorInput.value = books[id-1].author;
	authorInput.setAttribute('required', 'true');

	let imageInput = createElem('input', 'image-input');
	imageInput.value = books[id-1].image;
	imageInput.setAttribute('required', 'true');

	let plotInput = createElem('textarea', 'plot-input');
	plotInput.value = books[id-1].plot;
	plotInput.setAttribute('maxlength', '120');
	plotInput.setAttribute('required', 'true');

	let cancelBtn = createElem('button', 'cancel-btn', 'Cancel');
	let saveBtn = createElem('button', 'save-btn', 'Save');

	saveBtn.addEventListener('click', function(e) {
		e.preventDefault();

		books[id-1].name = nameInput.value;
		books[id-1].author = authorInput.value;
		books[id-1].image = imageInput.value;
		books[id-1].plot = plotInput.value;

		
		localStorage.setItem('booksArr', JSON.stringify(books));

		console.log(books);
	});

	cancelBtn.addEventListener('click', function(e) {
		e.preventDefault();

		console.log('CANCEL CLICK!' + id);
	});

	editForm.append(nameInput, authorInput, imageInput, plotInput, cancelBtn, saveBtn);
	dynamicSection.append(editForm);

}

// function renderAdd() {

// }

let saveBtn = document.query

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {

  let staticSection = createElem('section', 'static-section');
  let addBtn = createElem('a', 'add-btn', 'Add');
  addBtn.setAttribute('href', '#add');

  for (let value of obj) {
    let bookItem = createElem('div', 'book-item');
    let bookHeading = createElem('a', 'book-heading');
    bookHeading.setAttribute('href', `index.html?id=${value.id}#preview`);
    let editBtn = createElem('a', 'edit-btn', 'Edit');
    editBtn.setAttribute('href', `index.html?id=${value.id}#edit`);
    bookHeading.innerHTML = value.name;
    bookItem.append(bookHeading);
    bookItem.append(editBtn);
    
    staticSection.append(bookItem);
  }

  staticSection.append(addBtn);
  return staticSection;
}

function createElem(tagName, className, inner='') {
	let element = document.createElement(tagName);
	element.className = className;
	element.innerHTML += inner;

	return element;
}
