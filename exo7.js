var clickZone =document.querySelector
("#clickZone");

//event function

var loadStyle= function(event) {
    event.target.className = "dynamicStyle";
}
clickZone.addEventListener("click", loadStyle);