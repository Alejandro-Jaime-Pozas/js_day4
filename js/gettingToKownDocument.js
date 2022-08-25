console.log("let's get to know the document")

console.log(document)

let body = document.body;

console.log(body);

let children = body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);
console.dir(navBar);

// you can change elements from the main html here in js
navBar.className = 'navbar navbar-dark bg-dark'


// Popular methods w the Document object


// Document get methods
// - HTMLCollection is LIVE while Array is static...

// document.getElementById('id')
// return the first element w an id that matches the string id

let myHeader = document.getElementById('top-header');
console.log(myHeader)


// document.getElementByTagName('tag name')
// return an HTMLCollection (Array-like) of all elements that match that tag name

let myButtons = document.getElementsByTagName('button');
console.log(myButtons)


// document.getElementsByClassName('className')
// return an HTMLCollection(Array-like) of all elements that match that class name
let myRows = document.getElementsByClassName('row');
console.log(myRows);


// document.querySelector('selector');
// return the FIRST element that matches the specified selector

let firstCol = document.querySelector('.col-2') // simple selector; you need to put '.' or '#' to reference classes or ids
console.log(firstCol)

let divNav = document.querySelector('nav > div'); // combinator selector looking for div child of nav element
console.log(divNav)


// document.querySelectorAll('selector')
// return a NodeList (Array-like) 

let secondGroupButtons = document.querySelectorAll('#row-2 button') // this works by grabbing all children, grandchildren etc when no '>' is inserted bw...
console.log(secondGroupButtons);


// create elements w document method

// document.createElement('tagName')
// Create an element w the fiven tag name

let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header created by javascript'; // inserts html to an element
newHeader.className = 'text-center text-primary'; // inserts class details for the element
newHeader.style.backgroundColor = 'red' // overwrites the css style of an element
console.log(newHeader);



// add to our html
// body.append(newHeader)

// put newHeader at bottom of container
let myContainer = document.querySelector('.container');
myContainer.append(newHeader)