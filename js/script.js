
const testButton = document.getElementById("testbutton");

const displayField = document.getElementById("displayfield");

const nextBook = document.createElement("div");

let newBook = "";
let bookList = "";

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        (title + " by " + author + ", " + pages + " pages , " + read)
    }
}

const sunsetPark = new Book('Sunset Park', 'Paul Auster', '295', 'already read');
const stiller = new Book('Stiller', 'Max Frisch', '105', 'not read yet');
const derEkel = new Book('Der Ekel', 'Jean-Paul Sartre', '205', 'not read yet'); 


let myLibrary = [
    sunsetPark,
    stiller,
    derEkel,
];

function addBookToLibrary() {

}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        bookList = (myLibrary[i]);
        displayField.innerHTML = bookList;
    }
}



/* testButton.addEventListener('click', displayBooks); */



