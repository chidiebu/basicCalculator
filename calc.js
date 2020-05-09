var firstNumber = parseInt(document.getElementById("btn1").value);
var secondNumber = parseInt(document.getElementById("btn2").value);
var additionBtn = document.getElementById("add");
var subtractionBtn = document.getElementById("minus");
var multiplicationBtn = document.getElementById("mult");
var divisionBtn = document.getElementById("divide");
var Answer = document.getElementById("answerLabel");
var clearBtn = document.getElementById("clrBtn");
var closeApp = document.getElementById("close");


additionBtn.addEventListener("click", () =>{
    var firstNumber =parseInt(document.getElementById("btn1").value);
    var secondNumber =parseInt(document.getElementById("btn2").value);
    var Answer = document.getElementById("answerLabel");
    Answer.innerHTML = firstNumber + secondNumber;
 })

  subtractionBtn.addEventListener("click", () =>{
    var firstNumber =parseInt(document.getElementById("btn1").value);
    var secondNumber =parseInt(document.getElementById("btn2").value);
    var Answer = document.getElementById("answerLabel");
     Answer.innerHTML = firstNumber - secondNumber;
  })

  multiplicationBtn.addEventListener("click", () =>{
    var firstNumber =parseInt(document.getElementById("btn1").value);
    var secondNumber =parseInt(document.getElementById("btn2").value);
    var Answer = document.getElementById("answerLabel");
     Answer.innerHTML = firstNumber * secondNumber;
  })

  divisionBtn.addEventListener("click", () =>{
    var firstNumber =parseInt(document.getElementById("btn1").value);
    var secondNumber =parseInt(document.getElementById("btn2").value);
    var Answer = document.getElementById("answerLabel");
     Answer.innerHTML = firstNumber / secondNumber;
  })

  clearBtn.addEventListener("click", () =>{
    document.getElementById("btn1").value = 0;
    document.getElementById("btn2").value = 0;
    var Answer = document.getElementById("answerLabel");
    Answer.innerHTML = 0;
  })

  closeApp.addEventListener("click", () => {
    if (confirm("Do you want to close calculator ?")) {
      window.close();
    }
    
  })

