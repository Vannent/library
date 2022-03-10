const addBook = document.getElementById("add-button");
const markRead = document.getElementById("read-button");
const markUnread = document.getElementById("unread-button");
const removeBook = document.getElementById("delete-button");

addBook.addEventListener("click", function() {
    openForm();
})


function openForm() {
    document.querySelector(".form-popup").style.display = "flex";
}

function closeForm() {
    document.getElementByClassName("form-popup").style.display = "none";
}

let myLibrary = []

function Book() {

}

function addBookToLibrary() {
    
}