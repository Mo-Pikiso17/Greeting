// radio buttons
var radioBtnElem = document.querySelector('.languageBtn');

//Add button or greet me button
var greetBtnElem = document.querySelector('.greetBtn');

//Textbox
var textBoxElem = document.querySelector('.name');

//Counter
var nameCounterElem = document.querySelector('.counter');

//Display message space below the Greet me button
var messageElem = document.querySelector('.displayMsg');

//Display error message space below
var errorM = document.querySelector('.erroMsg');

// Add reset button
var resetBtnElem = document.querySelector('.resetBtn');

// ^ "start" and $ "end" with Alphabets or characters matcthing from a to z both in Caps or lowercase.
var letters = /^[A-Za-z]+$/;

var exitingName;

// to keep counter on the browser after refreshing my page.
if (localStorage['names']) {

    exitingName = JSON.parse(localStorage.getItem('names'));

}
var greetInsta = greeting(exitingName);

if (exitingName) {
    nameCounterElem.innerHTML = exitingName.length
}

//greeting function
function greet() {

    var language = document.querySelector("input[name='languageBtn']:checked");
    var name = textBoxElem.value;

    // var radioBtn = language.value;

    var errors = greetInsta.conditions(language, name)

    if (errors) {

        errorM.innerHTML = errors;

        setTimeout(function () {
            errorM.innerHTML = "";
        }, 3000);
        return;
    }

    else {
        if (letters.test(name)) {
            greetInsta.pushNames(name)
            messageElem.innerHTML = greetInsta.greets(language.value, name)

            localStorage.setItem('names', JSON.stringify(greetInsta.getNames()))
            nameCounterElem.innerHTML = greetInsta.getCount();
        } else {

            errorM.innerHTML = "Please enter a valid name. E.g Ndalo";

        setTimeout(function () {
            errorM.innerHTML = "";
        }, 3000);
        return;

        }
    }

}

greetBtnElem.addEventListener('click', greet)


function reset() {
    localStorage.clear()
    location.reload()
}

resetBtnElem.addEventListener('click', reset)
