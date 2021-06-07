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

//Display after browser has been cleared
var clearM = document.querySelector('.clearMsg');

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

    // language.checked = false;

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
                document.querySelector('.name').value = "";

                errorM.innerHTML = "";
            }, 3000);
            return;

        }

    language.checked = false;
    document.querySelector('.name').value = ""; 

    }
    // language.checked = false;
    // document.querySelector('.name').value = "";



}

greetBtnElem.addEventListener('click', greet)


function reset() {

    var language = document.querySelector("input[name='languageBtn']:checked");

    setTimeout(function () {
        location.reload()
        localStorage.clear()
    }, 2000);
    

    setTimeout(function () {
        clearM.innerHTML = "The page has been successfully reloaded";
    }, 1000);

    messageElem.innerHTML = "";
    language.checked = false;
    
}


resetBtnElem.addEventListener('click', reset)
