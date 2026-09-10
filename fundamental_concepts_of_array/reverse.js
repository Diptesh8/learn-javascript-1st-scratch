const names =["bill", "elon", "mark","waren","Diptesh"];
// const reversed =names.reverse();
// console.log(reversed)

// reverse using for loop -------------

for(let i = names.length-1 ; i >= 0;i--){
    const name = names[i];
    // console.log(name)
}

// reverse array using unshift ---------------------------
const rev_numb =[];
for(const name of names){
    console.log(name);
    rev_numb.unshift(name)
}
console.log(rev_numb);