
// 1. where to add

const placeslist = document.getElementById("places-list");

// 2. what to be added
const li =document.createElement("li");
li.innerText= "pahartoli bon";

// 3. add the child

placeslist.appendChild(li);

// 

const mainContainer =document.getElementById("main");

const section =document.createElement("section");
const h1 =document.createElement("h1");
h1.innerText ="my hobby list";
section.appendChild(h1);

mainContainer.appendChild(section);

const ul = document.createElement("ul");
const li = document.createElement("li");