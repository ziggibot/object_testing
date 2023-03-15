
const inputForm = document.getElementById("newbookform");
const displayField = document.getElementById("displayfield");
const buttonAddBook = document.getElementById("buttonaddbook");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return (title + " by " + author + ", " + pages + " pages , " + read)
    }
}

const bookFormButton = document.getElementById("buttonopenform");

bookFormButton.addEventListener('click', function () {
            inputForm.style.display = "block";
})

buttonAddBook.addEventListener('click', function () {
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
        nextBook.setAttribute("data-booknumber", myLibrary.indexOf(element));
        nextBook.innerHTML = (
            element.title
            + ", "
            + element.author
            + ", "
            + element.pages
            + " pages, "
            + element.read
            + '<button class="button_remove">Remove</button>'
        )

        displayField.appendChild(nextBook);

        const buttonRemove = document.querySelectorAll(".button_remove");

        buttonRemove.forEach(function (button) {
            button.onclick = function () {
                let thisBook = this.parentNode;
                thisBook.remove();
                let bookPosition = thisBook.dataset.booknumber;
                myLibrary.splice(bookPosition, 1);
            }
        })
    })
    document.getElementById("newbooktitle").value = "";
    document.getElementById("newauthorname").value = "";
    document.getElementById("newpagenumber").value = "";
    document.getElementById("newreadit").value = "";
    inputForm.style.display = "none";
});









