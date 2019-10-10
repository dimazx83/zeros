module.exports = function zeros(expression) {
  // your solution
    var result = 0;
    var result2 = 0;
    var result5 = 0;
    expression.split("*").forEach(i => {
      if (i.charAt(i.length - 2) == "!") {
        i = +i.substring(0, i.length - 2);
        if (i % 2 === 0) {
          for (let n = 2; n <= i; n += 2) {
            if (n % 2 == 0) { result2 ++ }        
          }      
  
        } else {
          for (let n = 1; n <= i; n += 2) {
            if (n % 5 == 0) {
              result5 ++;
            }
          }
        }
       }
     else {
        i = +i.substring(0, i.length - 1);
        while (i >1) {      
          result5 += Math.floor(i / 5);
          i /= 5;
         i= Math.floor(i)
        }
    }
    if(result2>result5){
      result=result2-result5;
    }
    else result=result5-result2;
    })
    return result;
  
}
