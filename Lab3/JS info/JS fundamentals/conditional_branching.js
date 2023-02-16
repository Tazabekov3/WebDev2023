//if (a string with zero)

if ("0") {
    alert( 'Hello' );
}

//The alert will show because a non-empty string ("0") is always true



//The name of JavaScript

if (prompt("What's the 'official' name of JS?", "") == "ECMAScript") {
    alert("Right!");
} else {
    alert("Not really. It is 'ECMAScript.'");
}



//Show the sign

let value = Number(prompt("Enter a number", ""));

if (value > 0) {
    alert(1);
} else if (value == 0) {
    alert(0);
} else {
    alert(-1);
}



//Rewrite 'if' into '?'

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

result = (a + b < 4) ? 'Below' : 'Over';



//Rewrite 'if...else' into '?'

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' : '';