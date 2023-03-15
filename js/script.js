
const inputForm = document.getElementById("newbookform");
const newBookSection = document.getElementById("newbooksection");
const displayField = document.getElementById("displayfield");
const buttonAddBook = document.getElementById("buttonaddbook");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
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
    let newBookread = document.getElementById("newreadit").checked;

    const bookToAdd = new Book(newBookTitle, newBookAuthor, newBookpages, newBookread);

    myLibrary.push(bookToAdd);

    myLibrary.forEach(function (element) {
        let nextBook = document.createElement("div");
        nextBook.setAttribute("data-booknumber", myLibrary.indexOf(element));
        nextBook.innerHTML = (
            '<p>'
            +element.title
            + '</p><p>'
            + element.author
            + '</p><p>'
            + element.pages
            + " pages</p>"
            + '<button class="button_readit">Read it</button>'
            + '<button class="button_remove">Remove</button>'
        )

        displayField.appendChild(nextBook);

        const buttonReadit = document.querySelectorAll(".button_readit");

        buttonReadit.forEach(function (button) {
            button.onclick = function () {
                let thisBook = this.parentNode;
                let bookPosition = thisBook.dataset.booknumber;
                let currentObject = myLibrary[bookPosition];
                if (currentObject.read === true) {
                    currentObject.read = false;
                } else {
                    currentObject.read = true;
                };
                if (currentObject.read === true) {
                    this.innerHTML = 'Already read';
                    this.style.backgroundColor = "green";
                } else {
                    this.innerHTML = 'Not read yet';
                    this.style.backgroundColor = "red";
                }
            }
        })

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









