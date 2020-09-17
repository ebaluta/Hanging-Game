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


function exercise2(){
    var num1 = document.getElementById("field1").value;
    var num2=document.getElementById("field2").value;


    var helper ="";

        for(var i =num1 ;i<=num2 ; i++){
            helper = helper + i + " ";
        }
    
    console.log(helper);

    document.getElementById("exercise2").innerHTML=helper;
}

