function tallnumb(numbers){
    let max= numbers[0];
    for(const number of numbers){
        if(number > max){
           max = number;
        }
        }
return max;
    }

        const tallest =[12, 65, 34, 76, 43, 89, 32, 57, 567];
        const output =tallnumb(tallest);
        console.log(output);