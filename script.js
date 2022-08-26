let myLibrary = [];

function blah(){
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

blah.prototype.toggleRead = function() {
  clearTable();
  console.log('Toggling read')
  console.log('current this = ' + this)
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

Book.prototype = Object.create(blah.prototype);

// const redwall = new Book("Redwall", "brian jaques", 200, true);
const redwall = new Book;
redwall.title = "Redwall";
redwall.author = "Brian Jaques";
redwall.pages = 200;
redwall.read = true;

console.log(redwall);
//console.log(redwall.isRead());

const icefire = new Book("Icefire", "fireman", 250, false);
const stormThief = new Book ("Storm Thief", "Wooding", 100, true);


function addBookToLibrary(Book) {
  myLibrary.push(Book);
};

addBookToLibrary(redwall);
//addBookToLibrary(stormThief);

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

console.log('Hi')
console.log(myLibrary)

function printTable(){
  console.log(table);
  for(const Book of myLibrary){
    let row = table.insertRow();
    for(let i = 0; i < 4; i++){
      let cell = row.insertCell();
      cell.innerHTML = Object.values(Book)[i];
    };
    let btn = document.createElement("button")
    btn.innerHTML = "Toggle Read";
    //console.log(eh.toggleRead);
    btn.addEventListener("click", Book.toggleRead);
    let cell = row.insertCell();
    cell.appendChild(btn);
  }
}

function addBookAndPrint (){

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
  console.log('hi');
}


document.getElementById('submit').addEventListener("click", addBookAndPrint);



printTable();