function createFunctionList() {

let functions = [];

for (var i = 0; i < 5; i++) {

functions.push(function (i) {

console.log("Index:", i);

});

}

return functions; }

const functionList = createFunctionList();

functionList[0](0);
functionList[1](1); 
functionList[2](2);
functionList[3](3);  
functionList[4](4); 
