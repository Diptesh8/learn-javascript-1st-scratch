function error(num1 ,num2){
  if(typeof num1 !== "number" || typeof num2 !== "number"){
    return "enter a valid number";
  }
    console.log(num1);
const mul = num1 *num2;
return mul;
}

// const number = error(dh,"vdgg");
// console.log(number);

// enter a valid  name otherwise show the error output------------------------

function fullname(first,second){
    if(typeof first !== "string" ){
        return"error please enter a valid string"
    }
    else if(typeof second !== "string"){
        return"error please enter a valid string"
    }
        
    
    const attach =first + " " + second;
    return attach;

}

// const names= fullname("batash", );
// console.log(names);

// enter a valid object otherwise show error---------------

function getprice(product){
    if(typeof product !== "object"){
        return "error"
    };
    const price =product.price;
    return price;
}
// const price = getprice({name:"pit chulkani",color:"yellow",price:126,size:"5inchi"})
// const price =getprice([8]);
// console.log(price);

// new trick unlock and javascript e array is one type of object----------

function get(numbers){
    if(Array.isArray(numbers) !== true){
        return"enter valid array "

    }
    // console.log(Array.isArray(numbers));
    // console.log(typeof numbers);
    const second =numbers[1];
    return second;
}
const output =get(9);
console.log(output);
