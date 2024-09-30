var range=document.querySelector(".range");
var h5 =document.querySelector("h5")

var count=0;
 var int = setInterval(function(){
    if(range.style.width === '100%'){
        h5.style.display="block";

        clearInterval(int);
    }

    range.style.width = count+'%';
    count++;



},50)