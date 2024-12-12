function createCounter(){
  var count=0;
 return { increment: function(){
   count++;
   return count;
  },
  getcount: function(){
    return count;
  }
};
}
let num=createCounter();
console.log(num.increment());
console.log(num.increment());
console.log(num.increment());
console.log(num.getcount());
