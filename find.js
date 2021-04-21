function calculate(){
    var number = document.getElementById("number").value;
    if (number == 0 || number==""){
        window.alert("Please type your correct Age");
        return;
        

    }
    var date = new Date().getFullYear();
    var birthyear = number-date;
    document.getElementById("year").style.display="block";
    document.getElementById("year").innerHTML = "Your year is " + birthyear;
}

function myfunction(){
    var num = document.createElement("input");
    num.setAttribute("type","date");
    num.setAttribute("value","2021-04-17");
    document.body.appendChild(num);
}


document.getElementById("year").style.display="none";
document.getElementById("button").onclick = function(){
    calculate();

};