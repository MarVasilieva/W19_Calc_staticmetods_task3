let num1 = document.querySelector('#n1');
let num2 = document.querySelector('#n2');
let out = document.getElementById('out');

    class Calculator {
            static showSumm() {
                summ.addEventListener('click', () =>{
                    let result = Number(num1.value) + Number(num2.value);
                out.innerHTML = result;
                });
            }
            static showSubtraction() {
                subtraction.addEventListener('click', () =>{
                    let result = (num1.value) - (num2.value);
                out.innerHTML = result;
                });
            }
            static showMultiplication() {
                multiplication.addEventListener('click', () =>{
                    let result = (num1.value) * (num2.value); 
                out.innerHTML = result;
                });
            }
            static showSegmentation() {
                segmentation.addEventListener('click', () =>{
                    let result = 1;
                    if (num2.value == 0){
                    alert ('На ноль делить нельзя!');
                }
                else
                result =(num1.value)/(num2.value);
                out.innerHTML = result;
                });         
        }
}

Calculator.showSumm(); 
Calculator.showSubtraction(); 
Calculator.showMultiplication(); 
Calculator.showSegmentation(); 