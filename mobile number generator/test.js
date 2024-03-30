function theme(){
    let h=document.body.getElementsByClassName("title")[0];
    let p=document.body.getElementsByClassName("para")[0];
    let btn=document.body.querySelector("button");    
    h.classList.toggle("background-light");
    h.classList.toggle("text-light");
    p.classList.toggle("background-light");
    p.classList.toggle("text-light");
    
    h.classList.toggle("background-dark");
    h.classList.toggle("text-dark");
    p.classList.toggle("background-dark");
    p.classList.toggle("text-dark");
    if(p.classList.value=="para background-dark text-dark"){
        btn.innerHTML="Light";
        btn.style.background="black";
        btn.style.color="white";
        btn.style.outline="none";
        // btn.style.border="none";
        btn.style.padding="20px";
        document.body.style.background="black";
    }else{
        btn.innerHTML="Dark";
        btn.style.background="white";
        btn.style.color="black";
        btn.style.outline="none";
        // btn.style.border="none";
        btn.style.padding="20px";
        document.body.style.background="white";
    }
}
let but=document.getElementsByTagName("button")[1];
let fun=function(){        
        let checker=true;
        let max=9999999;
        let min=1000000;
        let starter=["15","17","32","33","34","10","00","14","13","12","11","01","02","03","04","05","06","07","08","09"]
        console.log(but);
        let div=document.createElement("div");
        div.innerHTML="03"+starter[Math.floor(Math.random()*starter.length)]+Math.round(Math.random()*(max-min)+min);
        div.style.fontWeight="bold";
        div.style.margin="5px 10px";
        div.style.padding="5px 10px";
        div.style.border="1px solid black";
        div.style.width="100px";    
        document.body.after(div);

}
but.addEventListener("click",fun);
