function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("interest").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate / 100;
    var date = new Date();
    var fut_year = (date + years).getFullYear() ;

    if (p <= 0) {
        window.alert(" Please Enter a Positive Number for Amount.");
        document.getElementById("principal").focus();
    }
    else {
        document.getElementById("result").innerHTML =
         "If you deposit " + "<mark>" + p + "</mark>"+",<br/>" +
        " at an interest rate of "+" <mark>" + rate + "%"+"</mark>"+"<br />" +
         "You will receive an amount of "+"<mark>" + interest + "</mark>"+",<br />" +
         "in the year "+ "<mark>" + fut_year + "</mark>";
    }
}

function updateText(value) {
    document.getElementById("rate").innerHTML = value;
}

function show_interest() {

}
        