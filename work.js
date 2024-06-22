let buttons=document.querySelectorAll(".btn");
let display=document.querySelector(".display");
let show="";

Array.from(buttons).forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerText==="="){
            display.value=eval(show); 
        }
        else if(e.target.innerText==="C"){
            display.value="";
            show="";
            
        }
        else{
            show=show + e.target.innerText;
            display.value=show;
        }
    })
})