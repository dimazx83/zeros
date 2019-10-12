module.exports = function zeros(expression) {
  // your solution
  var result2 = 0;
  var result5 = 0;
  expression.split("*").forEach(i => {
    if (i.charAt(i.length - 2) == "!") {
      i = +i.substring(0, i.length - 2);
      for (let n = i; n > 0; n -= 2) {
        let m=n;
        while (m % 2 == 0) {
          result2++;
          m /= 2;
        }
      }
      for (let nn = i; nn > 0; nn -= 2) {
        let z=nn
        while (z % 5 == 0) {
          result5++;
          z /= 5;
        }
      }
    } else {
      i = +i.substring(0, i.length - 1);
      for (let n = i; n > 0; n --) {
        let mm=n;
        while (mm % 5 == 0) {
          result5++;
          mm /= 5;
        }
      }

    }
    
  })
   if(result2==0) return  result5
  else if(result5==0) return result2 
  else if (result2 >= result5) return result5

  else return result2
  
}
