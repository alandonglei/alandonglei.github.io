document.getElementById("output").style.visibility = "hidden";
document.getElementById("cmHeight").addEventListener("input", entered);

function entered(e) {
    // console.log(e.target.value);
    document.getElementById("output").style.visibility = "visible";
    let centiMeter = e.target.value;
    document.getElementById("inchHeight").innerHTML = centiMeter / 2.54;

    var feet = document.getElementById("ftHeight");
    var numFeet = centiMeter / 30.4;
    var feetInch = parseFloat(numFeet).toFixed(2);

    document.getElementById("ftHeight").innerHTML = feetInch;

    document.getElementById("mtHeight").innerHTML = centiMeter / 100;
}
