function createHeavyDataHandler() {

let largeData = new Array(1000000).fill(0); // Large data array

return {

processData: function () {

console.log("Processing data of size:", largeData.length);
  
},

clearData: function () {

console.log("Clearing data");

largeData = null;
return largeData;
} };
}

const handler = createHeavyDataHandler();

handler.processData();
console.log(handler.clearData());
