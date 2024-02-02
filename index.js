const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const submitBtn = document.querySelector("form");
const closeBtn = document.getElementById("normal-close");

const booksContainer = document.getElementById("books-container");

const cAuthor = document.getElementById("author");
const cTitle = document.getElementById("title");
const cPages = document.getElementById("pages");
const cStatus = document.getElementById("status");

const myLibrary = [];

const removeBook = (thatBook) => {
  myLibrary.splice(thatBook, 1);
  displayData();
}


const displayData = () => {
  booksContainer.innerHTML ="";
  for(let i = 0; i < myLibrary.length; i++){
    const div = document.createElement("div");
    div.className = "book-info";
    div.innerHTML = `<div class="book-info"><h1>Author: ${myLibrary[i].author}</h1><h1>Title: ${myLibrary[i].title}</h1><h1>${myLibrary[i].numPages} Pages</h1><h1>Status: ${myLibrary[i].isFinished}</h1><button class="button-4" onclick="removeBook(${i})">Delete</button></div>`;
    booksContainer.appendChild(div);
  }
}

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(cAuthor.value, cTitle.value, cPages.value, cStatus.value);
  displayData();
});

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
})

function Book(author, title, numPages, isFinished) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isFinished = isFinished;
}

function addBookToLibrary(a, b, c, d) {
  const book = new Book(a, b, c, d);
  myLibrary.push(book);
}


