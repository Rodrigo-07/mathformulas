// percentage
// 10% of 50  --> 50  *  10/100  =  500/100  -->  5

function percentage_1(){
    var x = document.getElementById("input6").value;  //get the value of the variables
    var y = document.getElementById("input7").value;

    document.getElementById("percentage_final_1").value = (x/100) * y;
}

// 5 is what % of 50 --> % = (5*100) / 50  -->  5%
// x is what % of t --> % = (x*100) / y  -->  final%

function percentage_2() {
    var x = document.getElementById("input8").value;
    var y = document.getElementById("input9").value;

    document.getElementById("percentage_final_2").value = (x*100) / y;
}