// Pythagorean theorema:  a^2 = b^2 + c^2
var a, b, c; 

function pythagorean() {
    a = document.forms["form_2"]["number_pythagorean_a"].value;
    b = document.forms["form_2"]["number_pythagorean_b"].value;
    c = document.forms["form_2"]["number_pythagorean_c"].value;

    if (a == "") {
        var pythagorean_result1 = Math.sqrt(Math.abs(Math.pow(b,2) - Math.pow(c,2))); // a^2 = b^2 + c^2 
        output_result3 = "a = " + pythagorean_result1 + "";
        document.getElementById("a").innerHTML = output_result3; 
        document.getElementById("b").innerHTML = b; 
        document.getElementById("c").innerHTML = c; 
    } else if (b == "") {
        var pythagorean_result2 = Math.sqrt(Math.abs(Math.pow(a,2) - Math.pow(c,2))); // b^2 = a^2 - c^2
        output_result3 = "b = " + pythagorean_result2 + "";
        document.getElementById("a").innerHTML = a; 
        document.getElementById("b").innerHTML = output_result3; 
        document.getElementById("c").innerHTML = c; 
    } else if (c == "") {
        var pythagorean_result3 = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)); // c^2 = a^2 - b^2
        output_result3 = "c = " + pythagorean_result3 + "";
        document.getElementById("a").innerHTML = a; 
        document.getElementById("b").innerHTML = b; 
        document.getElementById("c").innerHTML = output_result3;  
    }
}