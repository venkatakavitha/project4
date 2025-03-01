var elem = document.querySelectorAll(".Container");

elem.forEach(function(val){
console.log(val)
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
        // val.style.backgroundColor="red";
    });
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px";
        val.childNodes[3].style.top=dets.y+"px";

        // val.style.backgroundColor="red";
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    });
});