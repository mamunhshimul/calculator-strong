	
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {

   const key = e.target
   const action = key.dataset.action;

     if (!action) {
       console.log('number key!');
    }
     if (
		action === 'add' ||
		action === 'subtract' ||
		action === 'multiply' ||
		action === 'divide'
       ) {

        key.classList.add('is-depressed'); 
        calculator.dataset.previousKeyType = 'operator';
    }


 }
})


const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent


    if (!action) {
     if (displayedNum === '0') {
         display.textContent = keyContent
        }
     }
    if (!action) {
       if (displayedNum === '0') {
           display.textContent = keyContent
        } else {
           display.textContent = displayedNum + keyContent
        }
    }
    
/*operator key
---------------------*/
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
     }

    if (
		action === 'add' ||
		action === 'subtract' ||
		action === 'multiply' ||
		action === 'divide'
     ) {
       key.classList.add('is-depressed')
    }





    
  }
})


//When a user hits a number key after an operator key

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
    
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
    
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})



//If the previousKeyType is an operator, we want to replace the displayed number with clicked number.
const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}


//When a user hits the equals key
if (action === 'calculate') {


	const firstValue  = calculator.dataset.firstValue
	const operator    = calculator.dataset.operator
	const secondValue = displayedNum 
     display.textContent = calculate(firstValue, operator, secondValue)



    if (
		action === 'add' ||
		action === 'subtract' ||
		action === 'multiply' ||
		action === 'divide'
     ) {
  // ...
		calculator.dataset.firstValue = displayedNum
		calculator.dataset.operator = action
   }
}

if (action === 'calculate') {

}