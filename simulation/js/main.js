var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function dieInside()
{
	document.getElementById("simulation").innerHTML="<img src='images/dieInsideWax.gif' width='80%'>";
	document.getElementById("dieInside").style.display = "none";
	setTimeout(() => {
	document.getElementById("patternOnSprue").style.display = "block";
	}, 5500);
}

function patternOnSprue()
{
	document.getElementById("simulation").innerHTML="<img src='images/patternsOnSprue.gif' width='80%'>";
	document.getElementById("patternOnSprue").style.display = "none";
	setTimeout(() => {
	document.getElementById("shell").style.display = "block";
	}, 7000);
}

function shell()
{
	document.getElementById("simulation").innerHTML="<img src='images/assemblyInSlurry.gif' width='25%'>";
	document.getElementById("shell").style.display = "none";
	setTimeout(() => {
	document.getElementById("shellOut").style.display = "block";
	}, 3500);
}

function shellOut()
{
	document.getElementById("simulation").innerHTML="<img src='images/assemblyOut.gif' width='25%'>";
	document.getElementById("shellOut").style.display = "none";
	setTimeout(() => {
	document.getElementById("stucco").style.display = "block";
	}, 3500);
}

function stucco()
{
	document.getElementById("simulation").innerHTML="<img src='images/assemblyInStucco.gif' width='60%'>";
	document.getElementById("stucco").style.display = "none";
	setTimeout(() => {
	document.getElementById("deWaxing").style.display = "block";
	}, 5000);
}

function deWaxing()
{
	document.getElementById("simulation").innerHTML="<img src='images/deWaxing.gif' width='25%'>";
	document.getElementById("deWaxing").style.display = "none";
	setTimeout(() => {
	document.getElementById("ladle").style.display = "block";
	}, 6500);
}

function ladle()
{
	document.getElementById("simulation").innerHTML="<img src='images/moltenMetal.gif' width='75%'>";
	document.getElementById("ladle").style.display = "none";
	setTimeout(() => {
	document.getElementById("solidified").style.display = "block";
	}, 9500);
}

function solidified()
{
	document.getElementById("simulation").innerHTML="<img src='images/solidifiedShellMould.gif' width='55%'>";
	document.getElementById("solidified").style.display = "none";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}