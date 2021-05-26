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

//In order for the counterto display on the browser/screen
var count = JSON.parse(localStorage.getItem('count'))|| 0;

//Setting or push value as strings into localStorge
localStorage.setItem('count', count)

var namesGreeted = {};

//greetig in the DOM

function greet() { 

    var radio  = document.querySelector("input[name='languageBtn']:checked");
    var text = textBoxElem.value

    if(radio, text){

        if (radio.value === "Hello") {
            messageElem.innerHTML = "Hello" + ", " + text;
            count ++;
            nameCounterElem.innerHTML = count;
        }

        if (radio.value === "Molo"){
            messageElem.innerHTML = "Molo" + ", " + text;
            count ++;
            nameCounterElem.innerHTML = count;
        }

        else if (radio.value === "Jambo") {
            messageElem.innerHTML = "Jambo" + ", " + text;
            count ++;
            nameCounterElem.innerHTML = count;
        }

    }

    //Setting or push value as strings into localStorge
    localStorage.setItem('text', JSON.stringify(text))

    //Getting and reflecting on the browser
    JSON.parse(localStorage.getItem('text'))
    
    // //Getting and reflecting on the browser
    // JSON.parse(localStorage.getItem('count'))

    // The counter from localStorage with the one on screen
    if (localStorage['count']){
        //make counter equal to the value already stored in localStorage
        count = localStorage['count']
        //also show the counter on the screen
        nameCounterElem.innerHTML = count; 
        return; 
    } 

   
//when the greet button is pressed check if this user was already greeted before
//by looking if the userName exists in namesGreeted if not increment this counter and update the screen
if (namesGreeted['text'] === undefined && radio === "Hello"){
    //add an entry for the user that was greeted in the Object Map
    count ++;
    namesGreeted['text'] = 0;
    //update the DOM to display the counter
    nameCounterElem.innerHTML = count;
    return;
}

if (namesGreeted['text'] === undefined && radio === "Molo"){
    //add an entry for the user that was greeted in the Object Map
    count ++;
    namesGreeted['text'] = 0;
    //update the DOM to display the counter
    nameCounterElem.innerHTML = count;
    return;
}

else if (namesGreeted['text'] === undefined && radio === "Jambo"){
    //add an entry for the user that was greeted in the Object Map
    count ++;
    namesGreeted[text] = 0;
    //update the DOM to display the counter
    nameCounterElem.innerHTML = count;
}




}



greetBtnElem.addEventListener('click', greet)