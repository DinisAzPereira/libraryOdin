const myLibrary = [];

function Book(name, pages) {
  this.name = name;
  this.pages = pages; 

}

Book.prototype.addBookToLibrary = function ( ) {
    
    let newBook = new Book(this.name, this.pages);
    myLibrary.push(newBook);
    
}
