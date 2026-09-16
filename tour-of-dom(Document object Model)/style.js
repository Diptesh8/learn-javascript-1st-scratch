const sections = document.querySelectorAll("section");
// console.log(sections);
for(const section of sections){
    section.style.border = "2px solid blue";
    section.style.marginBottom ="8px";
    section.style.borderRadius = "15px";
}
const spaceId = document.getElementById("fruits-col");
spaceId.style.backgroundColor ="yellow";