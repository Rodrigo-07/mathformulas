//logarithm   Log_a(b) = x  =>  x^a = b
var a, b;

function logarithm() { 
    a_logarithm = document.forms["form_3"]["a_logarithm"].value;
    b_logarithm = document.forms["form_3"]["b_logarithm"].value;
    
    // Math.log returns natural logarithm (base e) of the given number
    // log_a(N) = log_b(N) / log_b(a)    =>   Math.log(number) / Math.log(base)
    x_result = Math.log(b_logarithm) / Math.log(a_logarithm);   //Log_a(b)
    document.getElementById("x").innerHTML = x_result;
    document.getElementById("x_area").innerHTML = "\\frac{1}{\\sqrt{x^2 + 1}}";
}