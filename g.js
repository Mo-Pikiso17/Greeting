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

var names = 'item';
//value a value to the textbox.
var name = textBoxElem.value;

//storing names in an object.
var  nameObj = { name: 'name'};

//storing the data inside the object into localStorage and converting it into a string.
localStorage.setItem(names, JSON.stringify(nameObj));

//getting the names that were converted into a string from being an object.
var convertedNames = JSON.parse(localStorage.getItem(names));


//checking if there are items in the localStorage.
if (localStorage.length > 0) {
    // ...
  } else {
    // ...
}


function greet() { 

    var radio  = document.querySelector("input[name='languageBtn']:checked");
    var convertedNames = textBoxElem.value;

    if(radio, convertedNames){

        if (radio.value === "English") {
            messageElem.innerHTML = "Hello" + ", " + convertedNames;
            count ++;
            nameCounterElem.innerHTML = count;
        }


        if (radio.value === "isiXhosa"){
            messageElem.innerHTML = "Molo" + ", " + convertedNames;
            count ++;
            nameCounterElem.innerHTML = count;
        }


        else if (radio.value === "Swahili") {
            messageElem.innerHTML = "Jambo" + ", " + convertedNames;
            count ++;
            nameCounterElem.innerHTML = count;
        }
    }    
    
    
}

greetBtnElem.addEventListener('click', greet);

