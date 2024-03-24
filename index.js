// Function Declaration
function printValue(value) {
   console.info(value);
 }
 
 function addFixedValues() {
   const toyCar = 10;
   const toyBlock = 7;
   const sum = toyCar + toyBlock;
   printValue(sum);
 }
 
 function addTwoValues(x, y) {
   const sum = x + y;
   printValue(sum);
 }
 
 function addTwoValuesAndReturn(x, y) {
   const sum = x + y;
   return sum;
 }
 
 // Function Expression
 const addFixedValuesExpr = function () {
   const toyCar = 10;
   const toyBlock = 7;
   const sum = toyCar + toyBlock;
   printValue(sum);
 };
 
 const addTwoValuesExpr = function (x, y) {
   const sum = x + y;
   printValue(sum);
 };
 
 const addTwoValuesAndReturnExpr = function (x, y) {
   const sum = x + y;
   return sum;
 };
 
 // Arrow Function
 const addFixedValuesArrow = () => {
   const toyCar = 10;
   const toyBlock = 7;
   const sum = toyCar + toyBlock;
   printValue(sum);
 };
 
 const addTwoValuesArrow = (x, y) => {
   const sum = x + y;
   printValue(sum);
 };
 
 const addTwoValuesAndReturnArrow = (x, y) => {
   const sum = x + y;
   return sum;
 };
 
 // Testing our functions
 addFixedValues(); // Expects 17 (10 + 7)
 addTwoValues(2, 5); // Expects 7 (2 + 5)
 console.log(addTwoValuesAndReturn(2, 10)); // Expects 12 (2 + 10)
 
 addFixedValuesExpr(); // Expects 17 (10 + 7)
 addTwoValuesExpr(2, 5); // Expects 7 (2 + 5)
 console.log(addTwoValuesAndReturnExpr(2, 10)); // Expects 12 (2 + 10)
 
 addFixedValuesArrow(); // Expects 17 (10 + 7)
 addTwoValuesArrow(2, 5); // Expects 7 (2 + 5)
 console.log(addTwoValuesAndReturnArrow(2, 10)); // Expects 12 (2 + 10)
 