function outer() {
  var message="Good Morning";
  return function inner() {
    return message;
  }
}
let program = outer();
console.log(program());
