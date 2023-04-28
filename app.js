"use strict";

// Info show on the card img
const holderName = document.getElementById("cardName"),
  cardNum = document.getElementById("cardNum"),
  expDate = document.getElementById("cardDate"),
  cvc = document.getElementById("cardCVC"),
  // Info from user's input
  inputName = document.getElementById("inputName"),
  inputCardNum = document.getElementById("inputCardNum"),
  inputMM = document.getElementById("inputMM"),
  inputYY = document.getElementById("inputYY"),
  inputCVC = document.getElementById("inputCVC"),
  // Submit form button, error Msg
  btn = document.getElementById("submit"),
  continueBtn = document.getElementById("continue"),
  errorMsgName = document.querySelector(".errorMsgName"),
  errorMsgNum = document.querySelector(".errorMsgNum"),
  errorMsgMM = document.querySelector(".errorMsgMM"),
  errorMsgYY = document.querySelector(".errorMsgYY"),
  errorMsgCVC = document.querySelector(".errorMsgCVC"),
  form = document.querySelector(".form"),
  thankYouMsg = document.querySelector(".complete"),
  section = document.getElementsByTagName('section'),
  // Regex check
  stringRegex = /^[a-zA-Z\s]*$/,
  numRegex = /^\d{16}$/,
  mmRegex = /^[1-9]$|^[1][0-2]$/,
  yyRegex = /^[2][3-8]$/,
  cvcRegex = /^[0-9]{3}$/;

///////////////////////////////////////////////////////////////////////////////////////////////

// Input name validation
function checkName() {
    if (inputName.value.match(stringRegex)) {
        errorMsgName.textContent = "";
        inputName.classList.remove("errorBorder");
    } else {
        errorMsgName.textContent = `Please enter letter only`;
        inputName.classList.add("errorBorder");
       
    }
    if (!inputName.value) {
        errorMsgName.textContent = `Name can't be blank`;
        inputName.classList.add("errorBorder");
       
    }
}

// Input CardNum validation
function checkCardNum() {
    if (inputCardNum.value.match(numRegex)) {
        errorMsgNum.textContent = "";
        inputCardNum.classList.remove("errorBorder");
    } else {
        errorMsgNum.textContent = `Please enter 16 digits of your card number`;
        inputCardNum.classList.add("errorBorder");
       
    }
    if (!inputCardNum.value) {
        errorMsgNum.textContent = `Number can't be blank`;
        inputCardNum.classList.add("errorBorder");
       
    }
}

// Input MM validation
function checkInputMM() {
    if (inputMM.value.match(mmRegex)) {
        errorMsgMM.textContent = "";
        inputMM.classList.remove("errorBorder");
    } else {
        errorMsgMM.textContent = `Please enter valid month (1-12)`;
        inputMM.classList.add("errorBorder");
       
    }
    if (!inputMM.value) {
        errorMsgMM.textContent = `Month can't be blank`;
        inputMM.classList.add("errorBorder");
       
    }
}

// Input YY validation
function checkInputYY() {
    if (inputYY.value.match(yyRegex)) {
        errorMsgYY.textContent = "";
        inputYY.classList.remove("errorBorder");
    } else {
        errorMsgYY.textContent = `Please enter a valid year (23-28)`;
        inputYY.classList.add("errorBorder");
       
    }
    if (!inputYY.value) {
        errorMsgYY.textContent = `Year can't be blank`;
        inputYY.classList.add("errorBorder");
       
    }
}

// Input CVC validation
function checkInputCVC() {
    if (inputCVC.value.match(cvcRegex)) {
        errorMsgCVC.textContent = "";
        inputCVC.classList.remove("errorBorder");
    } else {
        errorMsgCVC.textContent = `Please enter valid CVC (000-999)`;
        inputCVC.classList.add("errorBorder");
       
    }
    if (!inputCVC.value) {
        errorMsgCVC.textContent = `CVC can't be blank`;
        inputCVC.classList.add("errorBorder");
       
    }
}

// Check all inputs
function checkAll() {
    checkName();
    checkCardNum();
    checkInputMM();
    checkInputYY();
    checkInputCVC();
}

// Submit button
btn.addEventListener("click", function (e) {
  e.preventDefault();
  checkAll();
  // If all inputs are valid -> display thankyou msg
  if (
    inputName.value.match(stringRegex) &&
    inputCardNum.value.match(numRegex) &&
    inputMM.value.match(mmRegex) &&
    inputYY.value.match(yyRegex) &&
    inputCVC.value.match(cvcRegex)
  ) {
    form.classList.add("hidden");
    thankYouMsg.classList.remove("hidden");
  }
});

/////////////////////////////////////////////////////////////////////////////

// Input and sync info on card img

inputName.addEventListener('input', function() {
    holderName.innerText = inputName.value || 'Jane Appleseed';
  });

inputCardNum.addEventListener('input', function() {
    cardNum.innerText = inputCardNum.value.replace(/(\d{4})/g, '$1 ') || '0000 0000 0000 0000';
  });
  // \d{4})/g = match every group of 4 digits, and add a space ("$1 ")

inputMM.addEventListener('input', function() {
    expDate.innerText = `${inputMM.value}/${inputYY.value}` || '00/00';
  });

inputYY.addEventListener('input', function() {
    expDate.innerText = `${inputMM.value}/${inputYY.value}` || '00/00';
  });
  
inputCVC.addEventListener('input', function() {
    cvc.innerText = inputCVC.value || '000';
  });
