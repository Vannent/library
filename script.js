const addBook = document.getElementById("add-button");
const markRead = document.getElementById("read-button");
const markUnread = document.getElementById("unread-button");
const removeBook = document.getElementById("delete-button");
const cancelButton = document.getElementById("cancel-button")

addBook.addEventListener("click", (e) => openForm())
cancelButton.addEventListener("click", (e) => closeForm())
markRead.addEventListener("click", (e) => readBook())
markUnread.addEventListener("click", (e) => unreadBook())
removeBook.addEventListener("click", (e) => deleteBook())


function openForm() {
    document.querySelector(".form-popup").style.display = "flex";
    document.querySelector(".cover").style.display = "flex";
}

function closeForm() {
    document.querySelector(".form-popup").style.display = "none";
    document.querySelector(".cover").style.display = "none";
}

function readBook() {
    document.querySelector(".book-card").style.backgroundColor = "#75EDBF";
}

function unreadBook() {
    document.querySelector(".book-card").style.backgroundColor = "#f7f7f7a4";
}

function deleteBook() {

}

let myLibrary = []

function Book(name, author) {
    this.name = name
    this.author = author
}

function addBookToLibrary() {
    
}