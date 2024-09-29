var about= document.querySelector(".about");
var home=document.querySelector(".home");
var contact=document.querySelector(".contact");

var abouttext=document.querySelector(".abouttext");
var hometext=document.querySelector(".hometext");
var contacttext=document.querySelector(".contacttext");

hometext.style.display = "block";

about.addEventListener("click",function(){
    hidekaro();
    abouttext.style.display = "block";

});

home.addEventListener("click",function(){
    hidekaro();
    hometext.style.display = "block";

});

contact.addEventListener("click",function(){
    hidekaro();
    contacttext.style.display = "block";

});

function hidekaro() {
    document.querySelectorAll("p").forEach(function(p) {
        p.style.display = "none";
    });
}


