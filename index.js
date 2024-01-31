const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

const input = document.querySelectorAll('input');

input.forEach( (element) => {element.addEventListener("input", event =>{
    console.log(event.target.value)
})
})

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

/*
const myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}
*/