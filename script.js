let myLibrary = [];

class Book{
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

}

Book.prototype.toggleRead = function() {
  clearTable();
  let me = this;
  console.log('Toggling read')
  console.log('current this = ' + this)
  console.log('current title = ' + this.title)
  console.log('current read = ' + this.read)
  console.log('current me = ' + me)
  if(this.read == true){
    this.read = false;
    console.log('read was true')
    printTable();
    return;
  }
  console.log('read was false');
  console.log(this.read);
  this.read = true;
  console.log('read was false');
  printTable();
}

Book.prototype.isRead = function() {
  if(this.read){
    return true;
  }
  return false;
}

//making dummy books
//just trying both ways because why not
///
const redwall = new Book;
redwall.title = "Redwall";
redwall.author = "Brian Jaques";
redwall.pages = 200;
redwall.read = true;
///
const icefire = new Book("Icefire", "fireman", 250, false);
const stormThief = new Book ("Storm Thief", "Wooding", 100, true);
///

function addBookToLibrary(Book) {
  myLibrary.push(Book);
};

addBookToLibrary(redwall);
addBookToLibrary(stormThief);

function printLibrary(){
  myLibrary.forEach(function(Book) {
    console.log(Book.title);
    console.log(Book.author);
    console.log(Book.pages);
    console.log(Book.read);
  });
};

let table = document.getElementById("table");

function clearTable(){
  for(const element of myLibrary){
    if(table.rows.length > 1){
      table.deleteRow(1);
    }
  }
}


function printTable(){
  //print a row with cells for each book
  let bookID = 0;
  for(const Book of myLibrary){
    let row = table.insertRow();
    for(let i = 0; i < 4; i++){
      let cell = row.insertCell();
      cell.innerHTML = Object.values(Book)[i];
    };
    //also place a "Toggle Read" button
    placeToggleReadButton(Book, row);
    //also also place "Delete" Button
    placeDeleteButton(bookID, row);
    bookID++;
  }
}


function addBookAndPrint(){
let a = document.getElementById('titlein').value;
let b = document.getElementById('authorin').value;
let c = document.getElementById('pagein').value;
let d = document.getElementById('readin').checked;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  addBookToLibrary(new Book(a, b, c, d));
  if(table.rows.length > 1){
    clearTable();
  };
  printTable();
}

function placeToggleReadButton(Book, row){
  let btn = document.createElement("button")
  btn.innerHTML = "Toggle Read";
  //remember that addEvenListener auto-binds "this" (our button)
  //to the function
  //so this line below won't work
  //btn.addEventListener("click", Book.toggleRead);

  //wrapping the function lets us use the object's function proper
  btn.addEventListener("click", function() {Book.toggleRead();});
  let cell = row.insertCell();
  cell.appendChild(btn);
}

function placeDeleteButton(bookID, row){
  let btn = document.createElement("button")
  btn.innerHTML = "Delete Book";
  btn.addEventListener("click", function() {deleteBook(bookID)});
  let cell = row.insertCell();
  cell.appendChild(btn);
}

function deleteBook(bookID){
  clearTable();
  console.log(bookID);
  console.log("deleting " + myLibrary[bookID]);
  myLibrary.splice(bookID, 1);
  console.log(myLibrary);
  printTable();
}

function addBookAndPrint(){
  const form = document.getElementById('bookform');
  if(form.checkValidity()){
    let a = document.getElementById('titlein').value;
    let b = document.getElementById('authorin').value;
    let c = document.getElementById('pagein').value;
    let d = document.getElementById('readin').checked;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    addBookToLibrary(new Book(a, b, c, d));
    if(table.rows.length > 1){
      clearTable();
    };
    printTable();
  }
}


document.getElementById('submit').addEventListener("click", addBookAndPrint);



printTable();
console.log(redwall)
