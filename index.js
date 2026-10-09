let fromValueEl=document.getElementById("fromValue");
let toValueEl=document.getElementById("toValue");
let resultEl=document.getElementById("result");

function startCounter(){
    
    let fromInput=Number(fromValueEl.value);
    let toInput=Number(toValueEl.value);

    if(fromValueEl.value === ""){
        alert("Enter the from value");
        return;
    }
    if(toValueEl.value === ""){
        alert("Enter the to value");
        return;
    }
    if(fromInput > toInput){
        alert("From value should be less than or equal to To value");
        return;
    }

   let count =fromInput;

   resultEl.textContent=count;

   let timer=setInterval(function (){
    count++;

    resultEl.textContent=count;

    if(count === toInput){
        clearInterval(timer);
    }
   },1000);
}