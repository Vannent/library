const addBook = document.getElementById("add-button");
const markRead = document.getElementById("read-button");
const markUnread = document.getElementById("unread-button");
const removeBook = document.getElementById("delete-button");
const cancelButton = document.getElementById("cancel-button")

addBook.addEventListener("click", function() {
    openForm();
})

cancelButton.addEventListener("click", function() {
    closeForm()
})


function openForm() {
    document.querySelector(".form-popup").style.display = "flex";
    document.querySelector(".cover").style.display = "flex";
}

function closeForm() {
    document.querySelector(".form-popup").style.display = "none";
    document.querySelector(".cover").style.display = "none";
}

let myLibrary = []

function Book() {

}

function addBookToLibrary() {
    
}