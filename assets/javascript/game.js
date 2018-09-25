// 4 crystal buttons with hidden values and with clicks

var totalWins = 0
var totalLosses = 0

var targetNumber = Math.floor(Math.random()*100 + 20);
console.log(targetNumber);

$("#numberToGuess").text(targetNumber);
$("#u2").text(totalWins + "/" +totalLosses);

var counter = 0
$("#u3").text(counter);


var one = Math.round(Math.random()*12);
var two = Math.round(Math.random()*12);
var three = Math.round(Math.random()*12);
var four = Math.round(Math.random()*12);

$("#b5").attr("dataValue", one)
$("#b6").attr("dataValue", two)
$("#b7").attr("dataValue", three)
$("#b8").attr("dataValue", four)

$(document).on("click", ".box", function() {
    $("#u3").css("background-color", "orange");
    var boxValue = ($(this).attr("dataValue"));
    boxValue = parseInt(boxValue);
    counter += boxValue;
    console.log(counter)
    $("#u3").text(counter);
    $("#u1").text(boxValue);
    if (counter === targetNumber) {
        $("#u3").css("background-color", "green");
        counter = 0;
        totalWins++;
        console.log(totalWins)
    }
    else if (counter >= targetNumber) {
        
        counter = 0;
        totalLosses ++;
        $("#u3").css("background-color", "red");
    }
    $("#u2").text(totalWins + "/" + totalLosses);

    
})

function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
    }


