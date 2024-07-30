let isshow = false;
function display() {
    if(!isshow){
        document.getElementById("nav").classList.add("show");
    }else{
        document.getElementById("nav").classList.remove("show");
    } 
    isshow =!isshow;
}