var nav= document.getElementById("nav");
window.addEventListener('scroll', function(){
    if (this.scrollY >= 80)
    {
       nav.style.background="black"; 
       nav.style.position="fixed";
       nav.style.margin="0";
       nav.style.padding="15px";
    }
    else{
        nav.style = nav;
    }
    
});
var hol= document.getElementById("hol");
window.addEventListener('scroll', function(){
    if(this.scrollY >=700){
        hol.style.visibility="initial";
    }
    else{
        hol.style.visibility="hidden";
    }
});
var item = document.getElementsByClassName("items");
var btn = document.getElementsByClassName("btn");






