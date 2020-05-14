let booksArr = [

	{
		id: 1,
		name: 'Arc de Triomphe',
		author: 'Erich Maria Remarque',
		plot: `Arch of Triumph focuses upon the experiences of a German political refugee, known by Ravic.`,
		image: 'https://www.booklya.ua/content/upload/product/139k/139270/800x800/364022/arc-de-triomphe.JPG'

	},

	{
		id: 2,
		name: 'The Catcher in the Rye',
		author: 'Jerome David Salinger',
		plot: `The novel details two days in the life of Holden Caulfield after he has been expelled from prep school.`,
		image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg'
	},

	{
		id: 3,
		name: 'Fahrenheit 451',
		author: 'Ray Bradbury',
		plot: `Dystopian society that burns books in order to control dangerous ideas and unhappy concepts.`,
		image: 'https://assets1.bmstatic.com/assets/books-covers/49/0b/hbF9mhCd-ipad.jpg'
	}

];


localStorage.setItem('booksArr', JSON.stringify(booksArr));