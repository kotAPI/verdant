var arrow = new Audio("sound/arrow.mp3");
var playing=false;
var looper=0;




window.onload=function(){
	Init();
	
}
function Init()
{
	for (looper=0;looper<9;looper++){
			document.getElementsByClassName("arrow")[looper].style.animationPlayState = "paused";
		}
		var vid = document.getElementById("bgvid"); 
		vid.pause();

}
function PlayArrow(){
	if(playing==false){
		var vid = document.getElementById("bgvid"); 
		arrow.play();
		vid.play();
		playing=true;
		for (looper=0;looper<9;looper++){
			document.getElementsByClassName("arrow")[looper].style.animationPlayState = "running";
		}
	}
	else if(playing==true){
		var vid = document.getElementById("bgvid"); 
		arrow.pause();
		vid.pause();
		playing=false;
		for (looper=0;looper<9;looper++){
			document.getElementsByClassName("arrow")[looper].style.animationPlayState = "paused";
		}

	}		
}


//document.getElementById("v").onmouseover = function() { alert("Hover!"); }
