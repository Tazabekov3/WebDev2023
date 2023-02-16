//The prefix and postfix forms

let a = 1, b = 1;

let c = ++a; // a = c = 2
let d = b++; // b = 2, d = 1



//Assignment result

a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5



//Fix the addition

a = Number(prompt("First number?", 1));
b = Number(prompt("Second number?", 2));

alert(a + b);



//Type convertions

// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 23
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = " -9 5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2