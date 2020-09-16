function check(){
    
    var number= document.getElementById("field").value;
    if(number > 0 )
    document.getElementById("result").innerHTML= "positive number";
    
    else if(number<0) document.getElementById("result").innerHTML="negative number";
    else if(number === 0) document.getElementById("result").innerHTML="zero";
    else{
        document.getElementById("result").innerHTML="Input is invalid. It's not a number";
    }
}