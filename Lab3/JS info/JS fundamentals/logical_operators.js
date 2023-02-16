alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );// 3



//Check the range between

let age;

if (age >= 14 && age <= 90) {
    //execute
}



//Check the range outside

if (!(age >= 14 && age <= 90)) {
    //execute
}

if (age < 14 || age > 90) {
    //execute
}



//A guestion about 'if'

if (-1 || 0) alert( 'first' ); // Will execute because (-1 || 0) = true
if (-1 && 0) alert( 'second' ); // Won't execute because (-1 && 0) = false
if (null || -1 && 1) alert( 'third' ); // Will execute because (-1 && 1) = true and (null || true) = true



//Check the login

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {
    let pass = prompt('Password?', '');

    if (pass == 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass == '' || pass == null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName == '' || userName == null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}