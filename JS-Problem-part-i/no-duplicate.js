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
const answer = unik(unique);
console.log(answer);