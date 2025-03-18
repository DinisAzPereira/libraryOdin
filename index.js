const listedBooks = document.querySelector(".listedBooks");
const addBookButton = document.querySelector(".addBookButton");
const cancelButton = document.getElementById("cancel");
const nameInput = document.getElementById("name");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const submitButton = document.querySelector("submitButton");
const readCheckBox = document.getElementById("readCheckBox");
const readButton = document.querySelector(".readButton");

addBookButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  cancelButton.addEventListener("click", function () {
    favDialog.close();
  })

const myLibrary = [
    { id: self.crypto.randomUUID(), author: "Autor1", name: "ola1", pages: "3", read: false },
    { id: self.crypto.randomUUID(), author: "Autor2", name: "ola2", pages: "4", read: true },
    { id: self.crypto.randomUUID(), author: "Autor3", name: "ola3", pages: "5", read: true }
];


function Book(author,name, pages, read) {
    this.id = self.crypto.randomUUID();
    this.author = author;
    this.name = name;
    this.pages = pages; 
    this.read = read;

    

}

Book.prototype.changeStatus = function() {
    this.read = !this.read;
}


 function removeObjectWithId(myLibrary, id) {
   const objWithIdIndex = myLibrary.findIndex((obj) => obj.id === id);
   myLibrary.splice(objWithIdIndex, 1);
   return myLibrary;
 }




function addBookDesign(id , author, name, pages, read) {
    const newDiv = document.createElement("div")
    newDiv.classList = "book";

    listedBooks.appendChild(newDiv)
    const nameh3 = document.createElement("h3");
    const authorh3 = document.createElement("h3");
    const pagesh3 = document.createElement("h3");
    const readButton = document.createElement("button");
    readButton.classList = "readButton";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    newDiv.appendChild(nameh3);
    newDiv.appendChild(authorh3);
    newDiv.appendChild(pagesh3);
    newDiv.appendChild(deleteButton);
    newDiv.id = id;
    newDiv.appendChild(readButton);


    nameh3.textContent = "Title: " + name;
    authorh3.textContent = "Author: " + author;
    pagesh3.textContent = "Pages: " + pages;
    readButton.textContent = read;

    deleteButton.addEventListener("click", function(event){
        id = newDiv.id;
        removeObjectWithId(myLibrary, id)
        newDiv.remove();
        console.log(myLibrary)
    })
 
    readButton.addEventListener("click", function(){
        const book = myLibrary.find(book => book.id === newDiv.id)
        
        book.read = !book.read;

        if (readButton.textContent === "true") {
            return readButton.textContent = "false"
        } else { return readButton.textContent = "true"}


        
    })

}


function showBooks() {
    myLibrary.forEach(({id , author, name, pages, read}) => {

        addBookDesign(id , author, name, pages, read);


})



}
showBooks();


function addBookToLibrary(author, name, pages, read) {
    author = authorInput.value;
    name = nameInput.value;
    pages = pagesInput.value;
   read = readCheckBox.checked ? "true" : "false";
 
 
   let newBook = new Book(author,name,pages,read);

   myLibrary.push(newBook);
   addBookDesign( "" , author,name,pages,read)
   console.log(myLibrary)
 }