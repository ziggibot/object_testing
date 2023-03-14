

const displayField = document.getElementById("displayfield");
const buttonAddBook = document.getElementById("buttonaddbook");

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return (title + " by " + author + ", " + pages + " pages , " + read)
    }
}

const sunsetPark = new Book('Sunset Park', 'Paul Auster', '295', 'already read');
const stiller = new Book('Stiller', 'Max Frisch', '105', 'not read yet');
const derEkel = new Book('Der Ekel', 'Jean-Paul Sartre', '205', 'not read yet');



let myLibrary = [];

buttonAddBook.addEventListener('click', function() {
    while (displayField.firstChild) {
        displayField.removeChild(displayField.firstChild);
    }
    let newBookTitle = document.getElementById("newbooktitle").value;
    let newBookAuthor = document.getElementById("newauthorname").value;
    let newBookpages = document.getElementById("newpagenumber").value;
    let newBookread = document.getElementById("newreadit").value;
    const bookToAdd = new Book(newBookTitle, newBookAuthor, newBookpages, newBookread);
    myLibrary.push(bookToAdd);
    myLibrary.forEach(function (element) {
        let nextBook = document.createElement("div");
        nextBook.innerHTML = (element.title + ", " + element.author + ", " + element.pages + " pages, " + element.read)
        displayField.appendChild(nextBook);
    })
});







