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

var count = 0;


//greeting function
function greet() {
    // Set names and push them into an array

    var name = textBoxElem.value
    var language = document.querySelector("input[name='languageBtn']:checked");


    if (localStorage.getItem('names') == null) {
        localStorage.setItem('names', '[]')
    }

    //if radio button is selected...carry the conditions below.
    if (language) {

        var oldNames = JSON.parse(localStorage.getItem('names'))

        //Count names and greet names that are not already in the oldNames Array.
        if (!oldNames.includes(name)) {
            oldNames.push(name)

        if (language.value === "English") {
            //  return "Hello, " + name

            messageElem.innerHTML = "Hello, " + name;
            //  count ++;
            //  nameCounterElem.innerHTML = count;
        }

        if (language.value === "IsiXhosa") {
            // return "Molo, " + name
            messageElem.innerHTML = "Molo, " + name;
            // count ++;
            // nameCounterElem.innerHTML = count;
        }

        if (language.value === "Swahili") {
            // return "Jambo, " + name
            messageElem.innerHTML = "Jambo, " + name;
            // count ++;
            // nameCounterElem.innerHTML = count;
        }

        localStorage.setItem('names', JSON.stringify(oldNames))
        //.....

        //Setting the counter
        count++;
        count = oldNames.length;
        count = localStorage.setItem('count', count);
        count = localStorage.getItem('count');
        nameCounterElem.innerHTML = count;
        return;


    }

    // Continue to greet the names inside oldNames Array without incrementing the counter.
    if (oldNames.includes(name)) {
    if (language.value === "English") {
        //  return "Hello, " + name

        messageElem.innerHTML = "Hello, " + name;

        //  count ++;
        //  nameCounterElem.innerHTML = count;
    }

    if (language.value === "IsiXhosa") {
        // return "Molo, " + name

        messageElem.innerHTML = "Molo, " + name;

        // count ++;
        // nameCounterElem.innerHTML = count;
    }

    if (language.value === "Swahili") {
        // return "Jambo, " + name
        messageElem.innerHTML = "Jambo, " + name;
        // count ++;
        // nameCounterElem.innerHTML = count;
    }
}

}

}

greetBtnElem.addEventListener('click', greet)


function conditions() {
    var name = textBoxElem.value
    var language = document.querySelector("input[name='languageBtn']:checked");

    if (language == null && name === "") {

        errorM.innerHTML = "Enter name and select a language!";

        setTimeout(function () {
            errorM.innerHTML = "";
        }, 3000);
        return;
    }

    if (language) {
        if (name === "")

            // messageElem.innerHTML = "";
            errorM.innerHTML = "Please enter a name!";

        // messageElem.innerHTML = ""
        setTimeout(function () {
            errorM.innerHTML = "";
        }, 3000);
        return;
    }

    if (name !== "") {

        errorM.innerHTML = "Please select a language!";

        setTimeout(function () {
            errorM.innerHTML = "";
        }, 3000);
        return;
    }
}

greetBtnElem.addEventListener('click', conditions)


function reset() {
    localStorage.clear()
    location.reload()
}

resetBtnElem.addEventListener('click', reset)
