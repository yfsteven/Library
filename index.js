const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const submitBtn = document.getElementById("submit-form");


const cAuthor = document.getElementById("author");
const cTitle = document.getElementById("title");
const cPages = document.getElementById("pages");
const cStatus = document.getElementById("status");

const myLibrary = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(cAuthor.value, cTitle.value, cPages.value, cStatus.value);
  dialog.close();
});

showBtn.addEventListener("click", () => {
  dialog.showModal();
});


function Book(author, title, numPages, isFinished) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isFinished = isFinished;
}

function addBookToLibrary(a, b, c, d) {
  const book = new Book(a, b, c, d);
  myLibrary.push(book);
  console.log(myLibrary);
}


