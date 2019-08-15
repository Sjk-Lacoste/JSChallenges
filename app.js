function getMessage() {
    // Get inputs
    var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;

    // Get message tag for later manipulation
    var message = document.getElementById("message");

    // Convert inputs to numbers
    num1 = new Number(a);
    num2 = new Number(b);

    var result = num1 + num2;

    if ((num1 || num2) == 65 || result == 65) {
        message.innerHTML = "True, ";
        message.innerHTML += "Any of the numbers or their sum is equal to 65";
        return true;
    } else {
        message.innerHTML = "False, ";
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
            message.innerHTML = "True, First or Second number is equal to 3";
            return true;
        } else if(sum.toString().match(/3/)) { // check if the sum contains 3
            message.innerHTML = sum + " contains a 3";
            return true;
        } else {
            message.innerHTML = "False, Neither of the numbers nor their Sum contains a 3";
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
    
    var s = (a+b+c)/2; // half of the triangle's perimeter
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

function convertToTime() {
    var num = document.getElementById('num').value; // Get input
    var message = document.getElementById('time_message'); // Get response field

    // convert input to number
    num1 = new Number(num);

    var hours = Math.floor(num1 / 60);
    var minutes = num1 % 60;

    message.innerHTML = hours + " hour(s)," + minutes + " minute(s)";
}

function getCommonChars() {
    var string1 = document.getElementById('string1').value;
    var string2 = document.getElementById('string2').value;

    var common = document.getElementById('common');

    // Make sure that we get only letters
    var letters = /^[A-Za-z]+$/;

    var length1 = string1.length;
    var length2 = string2.length;
    
    var output = "";

    if (string1.match(letters) || string2.match(letters)) {
        for(var i = 0; i < length1; i++) {
            for(var j = 0; j < length2; j++) {
                if(string1[i] == string2[j] && output.indexOf(string1[i]) == - 1) {
                    output += string1[i] + ",";
                }
            }
        }
        common.innerHTML = "Common characters are: " + output;
        return output;
    } else {
        common.innerHTML = "You allowed to enter alphabets only!";
        return false;
    }
}