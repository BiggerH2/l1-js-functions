//Function Declaration

   //nikama kuname an action
   //you can call it from anywhere in ur  code

//Function Expression
   
   //its like putting an action inside a box and then u name that box
   //unaeza tumia after umeidefine

//Arrow Function

   //its a more compact way to define a function
   //a shorter way to write a function







// Print a given value to our consule

function printValue(value){
    //makes our value appear on our console
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
// we have two toys .... toy 1 = car toy 2 = blocks>>>> count total toys

 function addFixedValues(){
    const toyCar = 10; //The no of toycars we have
    const toyBlock = 7; //the number of blocks we have

    const sum = toyCar + toyBlock //add our toys together

    //print our results
    printValue(sum);

 }


//TODO: create a function that takes in two values and adds them
//count our them

function addTwoValues(x, y){
    //we are adding our two values together
    const sum = x + y; 

 //print our results
 printValue(sum);

}

//TODO: create a function that takes in two values, adds them and returns the value of the addition

//we want to show someelse our results

function addTwoValuesAndReturn(x, y){
  //we are adding our two values together
    const sum = x + y;
  //Return results so that msee mwingine azione
    return sum;
}



// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values

const addFixedValuesExpr = function (){
    const toyCar = 10;
    const toyBlock = 7;
    const sum = toyCar + toyBlock;

    //print our results
 printValue(sum);


};

//TODO: create a function that takes in two values and adds them
const addTwoValuesExpr = function (x, y){

    const sum = x + y;

    //print our results
 printValue(sum);

};

//TODO: create a function that takes in two values, adds them and returns the value of the addition

const  addTwoValuesAndReturnExpr = function(x, y){

    const sum = x + y;

 return sum;

};

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values

const addFixedValuesArrow =  () => {
    const toyCar = 10;
    const toyBlock = 7;
    const sum = toyCar + toyBlock;

    //print our results
 printValue(sum);
}


//TODO: create a function that takes in two values and adds them
const addTwoValuesArrow = (x, y) =>{
    const sum = x + y;

    //print our results
 printValue(sum);


}

//TODO: create a function that takes in two values, adds them and returns the value of the addition

const addTwoValuesAndReturnArrow = (x, y) =>{
    const sum = x + y;

 return sum;

}

//Testing our functions

addFixedValues(); // 10+7 we expect a 17
addTwoValues(2, 5);//
console.log(addTwoValuesAndReturn(2, 10));

addFixedValuesExpr();
addTwoValuesExpr(2, 5);
console.log(addTwoValuesAndReturnExpr(2, 10));

addFixedValuesArrow();
addTwoValuesArrow(2, 5);
console.log(addTwoValuesAndReturnArrow(2, 10));