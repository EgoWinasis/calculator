// memperbarui layar


const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
	calculatorScreen.value = number;
}

let prevNumber = '';
let calculationOperation = '';
let currentNumber = '0';


// penggunaan tombol number

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) =>{
	if (currentNumber==='0'){
		currentNumber = number;
	}else{
		currentNumber += number;
	}
	
}

numbers.forEach((number) =>{
	number.addEventListener("click", (event) =>{
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	})
})


// penggunaan tombol operator
 
const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) =>{
 	if (calculationOperation=== '') {
 		prevNumber = currentNumber;
 	}else if (calculationOperation = operator) {
 		alert("Operator sudah di tentukan")
 	}
 	calculationOperation = operator;
 	currentNumber = operator;

 } 

operators.forEach((operator) =>{
	operator.addEventListener("click", (event) =>{
		inputOperator(event.target.value);
		updateScreen(currentNumber);
		currentNumber = ''
	})
})



// pwnggunaan tombol clear (CA)

const clearAllBtn = document.querySelector('.all-clear');

const clearAll = () =>{
	prevNumber = '';
	calculationOperation = '';
	currentNumber = '0';
}

clearAllBtn.addEventListener('click', ()=>{
	clearAll();
	updateScreen(currentNumber);
})


const clearBtn = document.querySelector('.clear');

const clear = () =>{
	currentNumber = String(currentNumber); 

	if (currentNumber === '0') {
		currentNumber = currentNumber;
	}else if ((currentNumber.length - 1) == ''){
		currentNumber = '0';
	}
	else{
	currentNumber = currentNumber.substring(0, currentNumber.length - 1);
	}
}

clearBtn.addEventListener('click', ()=>{
	clear();
	updateScreen(currentNumber);
})


// penggunaan tombol titik (desimal)

const decimal = document.querySelector('.decimal');


const inputDecimal = (dot) =>{
		if (currentNumber.includes('.')) {
			return
		}
		currentNumber += dot;
}

decimal.addEventListener('click', () =>{
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
})


// penggunaan operator persentase

const percent = document.querySelector('.percentage');

percent.addEventListener('click', () => {
	currentNumber = currentNumber * 0.01 ;
	updateScreen(currentNumber)
})


// kalkulasi

const calculate = () =>{
	let result = ''
	switch(calculationOperation){
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break;

		case '-':
			result =  parseFloat(prevNumber) - parseFloat(currentNumber)
			break;

		case '*':
			result =  parseFloat(prevNumber) * parseFloat(currentNumber)
			break;

		case '/':
			result =  parseFloat(prevNumber) / parseFloat(currentNumber)
			break;
		default:
			return;
	}

currentNumber = result;
calculationOperator= '';

}


// penggunaan operator sama dengan(=)

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () =>{

	if (calculationOperation === '') {
		alert ("Operator belum ditetapkan")
	}else {
		calculate();
		updateScreen(currentNumber);
		prevNumber = currentNumber;
		calculationOperation= '';
	}
})


