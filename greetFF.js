
function greeting() {
    var listOfNames = [];
    var count = 0;


    function greets(language, gama) {
       
            if (language === "English") {
             return "Hello, " + gama
            }
    
            if (language === "isiXhosa") {
                return "Molo, " + gama
               }
    
               if (language === "Swahili") {
                return "Jambo, " + gama
               }
       
    }


    function conditions(){    
        if(language == null && gama === " "){
            return "Enter name and select a language!";
        }
    
        if(language){
            if(gama === " ")
            return "Please enter a name!";
        }
    
        if(gama !== " "){
           return "Please select a language!";
        }
    }

    function restCount(){
        count = 0;
        nameCounterElem.innerHTML = count;
        messageElem.innerHTML = "";
    }

    function nameGreeted(){
        if (namesGreeted[gama] === undefined){
            count++;
            namesGreeted[gama] = 0;
            // nameCounterElem.innerHTML = count;    
        }
    }

    return {
        greets,
        conditions,
        restCount,
        nameGreeted
    }
}
