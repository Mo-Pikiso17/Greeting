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

var name = textBoxElem.value;

var names = [];
// // Please enter a name
// var nameMsgElem = document.querySelector('.name_please')
if(localStorage['name']){
    names = JSON.parse(localStorage.getItem('name'));
}

var greetInsta = greeting ();
 
greetBtnElem.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector('input name=["languageBtn"]:checked'
    )});

// var emptyString = "Please enter name";

// for the language counter
//In order for the counterto display on the browser/screen
//var count = JSON.parse(localStorage.getItem('count'))|| 0;

//Setting or push value as strings into localStorge
//var setCount= localStorage.setItem('count', count)
//  count = 0;

// var sNames = getNames();
// let myItem = JSON.parse(localStorage.getItem(sNames));


// if(localStorage['name']){
//     names = JSON.parse(localStorage.getItem('name'));
// }


// var name = textBoxElem.value;

// function storeNames(name){

//     names.push(name);
// }


// //use in local storage
// function getNames(){
//     return names;
// }




// function greet() { 

//     var radio  = document.querySelector("input[name='languageBtn']:checked");
//     var name = textBoxElem.value;

//     if(radio, name){

//         if (radio.value === "English") {
//             messageElem.innerHTML = "Hello, " + name;
//             count ++;
//             nameCounterElem.innerHTML = count;
//         }

//         if (radio.value === "isiXhosa"){
//             messageElem.innerHTML = "Molo, " + name;
//             count ++;
//             nameCounterElem.innerHTML = count;
//         }

//         else if (radio.value === "Swahili") {
//             messageElem.innerHTML = "Jambo, " + name;
//             count ++;
//             nameCounterElem.innerHTML = count;
//         }
//     }


//   var sNames = getNames();
//     localStorage.setItem( 'name', JSON.stringify(sNames));
     
// }



// function conditions(){

//     var radio  = document.querySelector("input[name='languageBtn']:checked");
//     // add names to the textbox
//     var name = textBoxElem.value

//     if(radio == " " && name === " "){
//         errorM.innerHTML =  "Enter name and select a language!";
//         return;
//     }

//     if(radio){
//         if(name === " ")
//         errorM.innerHTML = "Please enter a name!";
//         return;
//     }

//     if(name !== " "){
//         errorM.innerHTML = "Please select a language!";
//        return;
//     }

//     // messageElem.innerHTML = conditions();
// }

// // function localCounter(){
// //     if (localStorage['count']){
// //         //make counter equal to the value already stored in localStorage
// //         count = localStorage['count']
// //         //also show the counter on the screen
// //         nameCounterElem.innerHTML = count;        
// //     } 
// // }


// // // add a global variable
// // var namesGreeted = {};

// // function nameGreeted(){
// //     var radio  = document.querySelector("input[name='languageBtn']:checked");

// //     var text = textBoxElem.value

// //     if (namesGreeted[text] === undefined && radio === "Hello"){
// //         //add an entry for the user that was greeted in the Object Map
// //         count ++;
// //         namesGreeted[text] = 0;
// //         //update the DOM to display the counter
// //         nameCounterElem.innerHTML = count;
// //         return;
// //     }
    
// //     if (namesGreeted[text] === undefined && radio === "Molo"){
// //         //add an entry for the user that was greeted in the Object Map
// //         count ++;
// //         namesGreeted[text] = 0;
// //         //update the DOM to display the counter
// //         nameCounterElem.innerHTML = count;
// //         return;
// //     }
    
// //     else if (namesGreeted['text'] === undefined && radio === "Jambo"){
// //         //add an entry for the user that was greeted in the Object Map
// //         count ++;
// //         namesGreeted[text] = 0;
// //         //update the DOM to display the counter
// //         nameCounterElem.innerHTML = count;
// //     }



//     // if (namesGreeted[text] === undefined){
//     //     // count = 0;
//     //     count++;
//     //     namesGreeted[text] = 0;

//     //     localStorage.setItem('text', JSON.stringify(text))
//     //     namesGreeted = JSON.parse(localStorage.getItem('text', text))
        
//     //     // localStorage.setItem('count', JSON.stringify(count))
//     //     // JSON.parse(localStorage.getItem('count', count))

//     //     nameCounterElem.innerHTML = text;
//     //     nameCounterElem.innerHTML = count;        

//     // }


// // function restCount(){
// //     // count = 0;
// //     // localStorage.setItem('count', JSON.stringify(count))
// //     nameCounterElem.innerHTML = 0;
// // } 




// // greetBtnElem.addEventListener('click', nameGreeted);
// // greetBtnElem.addEventListener('click', localCounter)
// // resetBtnElem.addEventListener('click', restCount);
// greetBtnElem.addEventListener('click', conditions);
// greetBtnElem.addEventListener('click', greet);
