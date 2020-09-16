
function counter(){
	var today = new Date();

	var day = today.getDate();
	var month = today.getMonth() +1 ;
	var year = today.getFullYear();

	var hour = today.getHours();
	if(hour<10) hour="0"+hour;

	var minute = today.getMinutes();
	if(minute<10) minute= "0"+minute;

	var seconds=today.getSeconds();
	if(seconds<10) seconds="0"+seconds;

	document.getElementById("zegar").innerHTML=
		day+"/" + month + "/" + year + " | " + hour + ":" +minute + ":" +seconds;

	setTimeout("odliczanie()",1000);


}