function loopyLighthouse(range, multiples, words) {
  for(let num = range[0]; num <= range[1]; num++) {
    if(num % multiples[0] === 0 && num % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if(num % multiples[1] === 0) {
      console.log(words[1]);
    } else if(num % multiples[0] === 0) {
      console.log(words[0]);
    } else {
      console.log(num);
    }
  }
  //return loopyLighthouse;
}
  

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
