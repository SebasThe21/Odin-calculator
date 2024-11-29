const display = document.querySelector("input");
let previusNumber = "";
let currentNumber = "";
let operation = "";
let point=false;

function putInInput(input) {
  display.value = input;
}

function pressNumber(num) {

   if(num==='.' && currentNumber.includes('.')){
    
    num='';
   }
        currentNumber+=num;
putInInput(currentNumber);
 
}


function pressOp(op) {
    
  if (currentNumber !== "") {
    if (previusNumber === "") {
      previusNumber = currentNumber;
    } else {
      operate();
    }
  }
  operation = op;
  currentNumber = "";
}
function operate() {
  
    let acum = "";
  
    if (operation === "+") {
      acum = Number(currentNumber) + Number(previusNumber);
    } else if (operation === "-") {
      acum = Number(previusNumber) - Number(currentNumber);
    }else if(operation==="x"){
        acum=Number(currentNumber) * Number(previusNumber);
    }else if(operation ==="/"){
        if(Number(previusNumber)===0 || Number(currentNumber)===0){
            acum="SINTAX ERROR"
            previusNumber = "";
            currentNumber="";
            operation="";
        }else{
            acum=Number(previusNumber) / Number(currentNumber);
        }
    }

    display.value = acum;
    if(acum==="SINTAX ERROR"){

        
    }else{
        previusNumber=acum
    }
    currentNumber = "";
  
}
function clearDisplay() {
  display.value = "";
  
  currentNumber = "";
  previusNumber = "";
  operation = "";
  
}

function dltNumber(){
    
    currentNumber=currentNumber.slice(0,-1)
    display.value=currentNumber;
    console.log(currentNumber)

}
