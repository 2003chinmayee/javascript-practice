var img1=document.querySelector("#image1");
var img2=document.querySelector("#image2");

document.querySelector("button").addEventListener("click",function(){
    var tempSrc = img1.src;
        img1.src = img2.src;
        img2.src = tempSrc;
})