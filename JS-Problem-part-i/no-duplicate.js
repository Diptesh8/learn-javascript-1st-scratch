function unik(array){
     const uniquee =[];
    for(const num of array){
        if(uniquee.includes(num) === false){
            uniquee.push(num);

        }
            continue;
    }
    // console.log(array);
    return uniquee; 
}

const unique =[15,3,6,15,8,6,4,9,3,6,5,12,43,2];
// const answer = unik(unique);
// console.log(answer);

// find the duplicate in a string of array and  using function and array-----------

function duplicate(string){
    const newArray=[];
    for(const name of string){
        if(newArray.includes(name) === false){
            newArray.push(name);
        }
    }
// console.log(string);
return newArray;
}
const array =["dip","raju","raja","king","dip","raja","gyan","nobita","doremon","king"];
const answer= duplicate(array);
console.log(answer)
