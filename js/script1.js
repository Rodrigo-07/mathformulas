// ax^2 + bx + c = 0
var a, b, c;
var final_result;

function validate() {
    a = document.forms["form_1"]["number_a"].value;  //[form's name][name of input]
    b = document.forms["form_1"]["number_b"].value;
    c = document.forms["form_1"]["number_c"].value;

    if (a == 0) {
        alert("A  can not be equal 0!");
    } else {
        var x1= (- b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        var x2 = (- b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        output_result1 = " x1= "+ +x1.toFixed(2) +"";
        output_result2 = " x2= "+ +x2.toFixed(2) +"";

        if (isNaN(x1)) {
            complex_number = "x1 and x2 are complex numbers!"
            document.getElementById("output_result1").style.display="none"; 
            document.getElementById("output_result2").style.display="none"; 
            document.getElementById("complex_number").style.display="block";
            document.getElementById("complex_number").innerHTML = complex_number;
        } else {
            document.getElementById("complex_number").style.display="none";
            document.getElementById("output_result1").style.display="block"; 
            document.getElementById("output_result2").style.display="block";  
            document.getElementById("output_result1").innerHTML = output_result1;
            document.getElementById("output_result2").innerHTML = output_result2;
        }
    }
}

//output_result1 = " x1="+ +x1.toFixed(2)  +" x2="+ +x2.toFixed(2) +" ";