var n = Math.floor(Math.random()*101);
var count=0;
console.log(n)

function asus(){
    
    var guessed_num=(document.getElementById("n").value);
    count+=1;
    if(guessed_num==n){
        document.getElementById("h11").textContent="congratulations!!!";
    }
    else if(guessed_num>n){
        document.getElementById("h11").textContent="Try with smaller number";

    }
    else{
        document.getElementById("h11").textContent="Try with greater number"
    }
    document.getElementById("count").textContent=count;
}