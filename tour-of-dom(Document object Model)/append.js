
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
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText= "programming";
ul.appendChild(li1);

const li2 = document.createElement("li");
li1.innerText= "gym";
ul.appendChild(li2);

const li3 = document.createElement("li");
li1.innerText= "dancing";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set inner html--------

const sectionDress = document.createElement("section");
sectionDress.innerHTML=`
<h1> My Dress Section </h1>
<ul>
<li>jinse</li>
<li>baggy</li>
<li>shirt</li>
<li>hoddy</li>
</ul>
`
mainContainer.appendChild(sectionDress)
