// for a given string tell me whether it has even number of charceters or not-----------------------------
function evenSizeString(str){
    console.log(str);
    const lenth = str.length;
    if(lenth % 2 ===0){
        console.log("even number");
    }
    else{
        console.log("odd number");
    }
    console.log(lenth);
}
evenSizeString("Dipteshm");
