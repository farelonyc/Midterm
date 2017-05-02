document.getElementById("form2").onsubmit=function() {
     fulano = parseInt(document.querySelector('input[name = "fulano"]:checked').value);
	   sutano = parseInt(document.querySelector('input[name = "sutano"]:checked').value);

	   result = fulano + sutano;

	document.getElementById("grade3").innerHTML = result;

    if (result == 0) {result2 = "Please watch the video one more time!<br /><img src='img/Jestro.png' width='300' />"};
    if (result == 50) {result2 = "Please watch the video one more time!<br /><img src='img/CLAY_528.jpg' width='300' />"};
    if (result == 100) {result2 = "Perfecto! Please continue to the Retain Forever Section!<br /><img src='img/MACY_528.jpg' width='300' />"};


  document.getElementById("grade4").innerHTML = result2;


return false; // required to not refresh the page; just leave this here
} //this ends the submit function
