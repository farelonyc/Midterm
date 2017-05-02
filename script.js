document.getElementById("form1").onsubmit=function() {
     variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
     cinco = parseInt(document.querySelector('input[name = "cinco"]:checked').value);

	   result = variable + sub + con + ifstate + cinco;

	document.getElementById("grade").innerHTML = result;


    if (result == 0) {result2 = "Please go to the Beginner level.<br /><img src='img/AARON_360.jpg' width='300' />"};
    if (result == 20) {result2 = "Please go to the Beginner level.<br /><img src='img/AARON_360.jpg' width='300' />"};
    if (result == 40) {result2 = "Please go to the Beginner level.<br /><img src='img/AARON_360.jpg' width='300' />"};
    if (result == 60) {result2 = "Muy bien. Please go to the Intermediate level.<br /><img src='img/LANCE_528.jpg' width='300' />"};
    if (result == 80) {result2 = "Muy bien. Please go to the Intermediate level.<br /><img src='img/LANCE_528.jpg' width='300' />"};
    if (result == 100) {result2 = "Perfecto! ya hablas espanol!!!<br /><img src='img/KingHalbert.jpg' width='300' />"};


  document.getElementById("grade2").innerHTML = result2;


return false; // required to not refresh the page; just leave this here
} //this ends the submit function



document.getElementById("form2").onsubmit=function() {
     fulano = parseInt(document.querySelector('input[name = "fulano"]:checked').value);
	   sutano = parseInt(document.querySelector('input[name = "sutano"]:checked').value);

	   result = fulano + sutano;

	document.getElementById("grade3").innerHTML = result;

    if (result == 0) {result2 = "Please watch the video one more time!<br /><img src='img/0.jpg' width='300' />"};
    if (result == 50) {result2 = "Please watch the video one more time!<br /><img src='img/25.jpg' width='300' />"};
    if (result == 100) {result2 = "Perfecto! Please continue to the Retain Forever Section!<br /><img src='img/100.jpg' width='300' />"};


  document.getElementById("grade4").innerHTML = result2;


return false; // required to not refresh the page; just leave this here
} //this ends the submit function
