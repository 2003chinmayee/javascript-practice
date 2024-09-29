var form1 = document.querySelector("form");
var inp1 = document.querySelector("#input1");
var inp2 = document.querySelector("#input2");
var h5 = document.querySelector("h5");

form1.addEventListener("submit", function(event) {
    event.preventDefault();
    if (inp1.value === '' || inp2.value === '') {
        h5.textContent = "Error, some fields are empty";
        h5.style.color = "red";
    } else {
        h5.textContent = "";
        h5.style.color = "black";
    }
});
