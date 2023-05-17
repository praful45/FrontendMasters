class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName){
		if(!bookName.includes("Great")){
			this.favoriteBooks.push(bookName);
		}
	}

	printFavoriteBooks(){
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for(let bookName of this.favoriteBooks){
			console.log(bookName);
		}
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
}

// function addFavoriteBook(bookName) {
// 	if (!bookName.includes("Great")) {
// 		favoriteBooks.push(bookName);
// 	}
// }

// function printFavoriteBooks() {
// 	console.log(`Favorite Books: ${favoriteBooks.length}`);
// 	for (let bookName of favoriteBooks) {
// 		console.log(bookName);
// 	}
// }

function loadBooks(theBookShelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API,function onBooks(bookNames){
		for(let bookName of bookNames){
			theBookShelf.addFavoriteBook(bookName);
		}
		theBookShelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

//myBooks instance of Bookshelf
var myBooks = new Bookshelf();
loadBooks(myBooks);


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
