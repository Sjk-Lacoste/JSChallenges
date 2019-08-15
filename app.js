function getMessage() {
    var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    var message = document.getElementById("message");

    // Convert inputs to numbers
    num1 = new Number(a);
    num2 = new Number(b);

    var result = num1 + num2;

    if ((num1 || num2) == 65 || result == 65) {
        message.innerHTML = "True\n";
        message.innerHTML += "Any of the numbers or their sum is equal to 65";
        return true;
    } else {
        message.innerHTML = "False\n";
        message.innerHTML += "Neither of the numbers nor their sum is equal to 65";
        return false;
    }
}

function containsThree() {
    var p = document.getElementById('ini1').value;
    var q = document.getElementById('ini2').value;

    var message = document.getElementById('contains');

    // convert inputs to numbers
    a = new Number(p);
    b = new Number(q);

    var sum = a + b;

    while((a || b) > 0 && sum > 0) {
        if ((a || b) == 3) {
            message.innerHTML = "First or Second number is equal to 3";
            return true;
        } else if(sum.toString().match(/3/)) { // check if the sum contains 3
            message.innerHTML = sum + " contains a 3";
            return true;
        } else {
            message.innerHTML = "Neither of the numbers nor their Sum contains a 3";
            return false;
        }
    }
}


function areaOfTriangle() {
    var v1 = document.getElementById('a').value;
    var v2 = document.getElementById('b').value;
    var v3 = document.getElementById('c').value;
    var results = document.getElementById('area');

    // Convert inputs to numbers
    a = new Number(v1);
    b = new Number(v2);
    c = new Number(v3);

    var s = (a+b+c)/2; // half of the triangle perimeter
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    
    results.innerHTML = area;
    return area;
}

function getLargestNumber() {
    var a = document.getElementById('firstNumber').value;
    var b = document.getElementById('secondNumber').value;
    var c = document.getElementById('thirdNumber').value;

    var largest = document.getElementById('largest');

    // convert inputs to numbers
    num1 = new Number(a);
    num2 = new Number(b);
    num3 = new Number(c);

    var list = [num1, num2, num3];

    var larger = Math.max.apply(null, list);

    if(larger) {
        largest.innerHTML = larger;

        return larger;
    }
}

function test() {
    // Get id to display message
    var message = document.getElementById('trueOrFalse');

    // Get numbers from inputs
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    // convert inputs into numbers
    a = new Number(num1);
    b = new Number(num2);

    // Create sum variable
    var sum = a + b;

    if ((a || b) === 65 || sum == 65 ) {
        message.innerHTML = "True"; // Display message "True" to user
        console.log("True");
        return true;
    } else {
        message.innerHTML = "False"; // Display message "False" to user
        console.log("False");
        return false;
    }
}

function convertToTime() {
    var num = document.getElementById('num').value;
    var message = document.getElementById('time_message');

    // convert input to number
    num1 = new Number(num);

    var hours = Math.floor(num1 / 60);
    var minutes = num1 % 60;

    message.innerHTML = hours + ":" + minutes;
}