const addBook = document.getElementById("add-button");
const markRead = document.getElementById("read-button");
const markUnread = document.getElementById("unread-button");
const removeBook = document.getElementById("delete-button");
const cancelButton = document.getElementById("cancel-button");
const submitButton = document.getElementById("submit-button");

addBook.addEventListener("click", (e) => openForm())
cancelButton.addEventListener("click", (e) => closeForm())
submitButton.addEventListener("click", (e) => addBookToLibrary());


function openForm() {
    document.querySelector(".form-popup").style.display = "flex";
    document.querySelector(".cover").style.display = "flex";
}

function closeForm() {
    document.querySelector(".form-popup").style.display = "none";
    document.querySelector(".cover").style.display = "none";
}

function Book(name, author) {
    this.name = name
    this.author = author
}

// Display Book
let myLibrary = [
    {
        name: "Lord of the Rings",
        author: "J. R. R. Tolkien"
    }
];

const books = myLibrary
books.forEach((book) => addBooktoList(book));

function addBooktoList(book) {
    const list = document.querySelector(".book-cards");
    const bookCard = document.createElement("div");
    bookCard.className = "book-card"

    bookCard.innerHTML = `
    <div class="book-title">${book.name}</div>
    <div class="author">${book.author}</div>
    <div class="book-buttons">
        <button><img src="./img/check.png" class="read-button"></button>
        <button><img src="./img/unread.png" class="unread-button"></button>
        <button><img src="./img/delete.png" class="delete-button"></button>
    </div>
    `;
    list.appendChild(bookCard);
};

function clearField() {
    const name = document.querySelector("#book_name").value = "";
    const author = document.querySelector("#author_name").value = "";
};

document.addEventListener("DOMContentLoaded", UIEvent.displayBooks);

// Add Book to Library
function addBookToLibrary() {
    const name = document.querySelector("#book_name").value;
    const author = document.querySelector("#author_name").value;
    const book = new Book(name, author);

    if(name === "" || author === "") alert("Please fill the fields.")
    else {
        console.log(book);
        addBooktoList(book); // add book to UI.
        closeForm();
        clearField();
    }
};

document.querySelector(".book-cards").addEventListener("click", (e) => {
    manageBook(e.target);
});

// Remove Book from Library
function manageBook(target) {
    if(target.classList.contains("delete-button")) {
        target.parentElement.parentElement.parentElement.remove();
    };
    if(target.classList.contains("read-button")) {
        target.parentElement.parentElement.parentElement.style.backgroundColor = "#75EDBF";
    };
    if(target.classList.contains("unread-button")) {
        target.parentElement.parentElement.parentElement.style.backgroundColor = "#f7f7f7a4";
    };
};