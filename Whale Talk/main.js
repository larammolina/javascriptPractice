const input = "Hieau, Human";
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i=0; i< input.length; i++){
  for(let a=0; a< vowels.length; a++) {
    if(input[i] === vowels[a]) {
      if(input[i] === "e") {
          resultArray.push("ee");
      } else if(input[i] === "u") {
          resultArray.push("uu");
      } else {
          resultArray.push(input[i]);
     }
   }
  }
}

console.log(resultArray);