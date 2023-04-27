'use strict'

// Info show on the card img 
const holderName = document.getElementById('cardName');
const cardNum = document.getElementById('cardNum');
const expDate = document.getElementById('cardDate');
const cvc = document.getElementById('cardCVC');

// Info from user's input 
const inputName = document.getElementById('inputName');
const inputCardNum = document.getElementById('inputCardNum');
const inputMM = document.getElementById('inputMM');
const inputYY = document.getElementById('inputYY');
const inputCVC = document.getElementById('inputCVC');

// Submit form button, error Msg
const btn = document.getElementById('submit');
const continueBtn = document.getElementById('continue');

const errorMsgName = document.querySelector('.errorMsgName');
const errorMsgNum = document.querySelector('.errorMsgNum');
const errorMsgMM = document.querySelector('.errorMsgMM');
const errorMsgYY = document.querySelector('.errorMsgYY');
const errorMsgCVC = document.querySelector('.errorMsgCVC');

const rightSection = document.querySelector('.right-section');
const thankYouMsg = document.querySelector('.complete');


// Regex check 
const stringRegex = /^[a-zA-Z\s]*$/;
const numRegex = /^\d{16}$/;
const mmRegex = /^[1-9]$|^[1][0-2]$/;
const yyRegex = /^[2][3-8]$/;
const cvcRegex = /^[0-9]{3}$/;

///////////////////////////////////////////////////////////////////////////////////////////////


// Input name validation
const checkName = () =>{
if(inputName.value.match(stringRegex)) {
    errorMsgName.textContent = '';
    inputName.classList.remove('errorBorder');                    
} else {
    errorMsgName.textContent = `Please enter letter only`;
    inputName.classList.add('errorBorder');
    return false;
} 
if(!inputName.value) {
    errorMsgName.textContent = `Name can't be blank`;
    inputName.classList.add('errorBorder');
    return false;
} 
}

// Input CardNum validation
const checkCardNum = () => {
if(inputCardNum.value.match(numRegex)) {
    errorMsgNum.textContent = '';
    inputCardNum.classList.remove('errorBorder');
    
} else {
    errorMsgNum.textContent = `Please enter 16 digits of your card number`;
    inputCardNum.classList.add('errorBorder');
    return false;
} 
if(!inputCardNum.value) {
    errorMsgNum.textContent = `Number can't be blank`;
    inputCardNum.classList.add('errorBorder');
    return false;
} 
}

// Input MM validation
const checkInputMM = () => {
if(inputMM.value.match(mmRegex)) {
    errorMsgMM.textContent = '';
    inputMM.classList.remove('errorBorder');
    
} else {
    errorMsgMM.textContent = `Please enter valid month (1-12)`;
    inputMM.classList.add('errorBorder');
    return false;
} 
if(!inputMM.value){
    errorMsgMM.textContent = `Month can't be blank`;
    inputMM.classList.add('errorBorder');
    return false;
}
}

// Input YY validation
const checkInputYY = () => {
if(inputYY.value.match(yyRegex)) {
    errorMsgYY.textContent = '';
    inputYY.classList.remove('errorBorder');
    
} else {
    errorMsgYY.textContent = `Please enter a valid year (23-28)`;
    inputYY.classList.add('errorBorder');
    return false;
}
if(!inputYY.value) {
    errorMsgYY.textContent = `Year can't be blank`;
    inputYY.classList.add('errorBorder');
    return false;
}
}

// Input CVC validation 
const checkInputCVC = () => {
if(inputCVC.value.match(cvcRegex)) {
    errorMsgCVC.textContent = '';
    inputCVC.classList.remove('errorBorder');
    
} else {
    errorMsgCVC.textContent = `Please enter valid CVC (000-999)`;
    inputCVC.classList.add('errorBorder');
    return false;
}
if(!inputCVC.value) {
    errorMsgCVC.textContent = `CVC can't be blank`;
    inputCVC.classList.add('errorBorder');
    return false;
}
}

// Check all inputs 
const checkAll = () => {
checkName();
checkCardNum();
checkInputMM();
checkInputYY();
checkInputCVC();
}

// Submit button 
btn.addEventListener('click',function(e) {
e.preventDefault();
checkAll();
// If all inputs are valid -> display thankyou msg
if(inputName.value.match(stringRegex) && inputCardNum.value.match(numRegex) && inputMM.value.match(mmRegex) && inputYY.value.match(yyRegex) && inputCVC.value.match(cvcRegex)) {
rightSection.classList.add('hidden');
thankYouMsg.classList.remove('hidden');
}
})

/////////////////////////////////////////////////////////////////////////////

// Input and sync info on card img 

//const updateName = () => {
    inputName.addEventListener('input',function() {
        if(!this.value) {
            return holderName.innerText = `Jane Appleseed`;
        } 
        holderName.innerText = `${inputName.value}`
    })
//}

    inputCardNum.addEventListener('input',function() {
        if(!this.value) {
            return cardNum.innerText = `0000 0000 0000 0000`;
        }
        // \d{4})/g = match every group of 4 digits, and add a space ("$1 ")
        cardNum.innerText = `${inputCardNum.value}`.replace(/(\d{4})/g, '$1 ');
    })

    inputMM.addEventListener('input',function() {
        if(!this.value) {
            return expDate.innerText = `00/00`;
        }
        expDate.innerText = `${inputMM.value}/${inputYY.value}`;
    })

    inputYY.addEventListener('input',function() {
        if(!this.value) {
            return expDate.innerText = `00/00`;
        }
        expDate.innerText = `${inputMM.value}/${inputYY.value}`;
    })

    inputCVC.addEventListener('input',function() {
        if(!this.value) {
            return cvc.innerText = `000`;
        } 
        cvc.innerText = `${inputCVC.value}`;
    })

   

