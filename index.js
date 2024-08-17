const  box= document.getElementById("box");
const  tofarhenheit= document.getElementById("convertor");
const  tocelsius= document.getElementById("convertor1");
const result= document.getElementById("result");
let temp

function convert(){

    if(tofarhenheit.checked){
        temp= Number(box.value);
        temp=temp *9 /5 +32;
        result.textContent= temp.toFixed(2) + "°F"
        result.classList.add("show");
    }
    else if(tocelsius.checked){
        result.textContent= "You selected to Celsius";
        temp= Number(box.value);
        temp= (temp-32)*(5/9);
        result.textContent= temp.toFixed(2) + "°C"
        result.classList.add("show");
    
    }
    else{
        result.textContent="Select a unit";
    }
}