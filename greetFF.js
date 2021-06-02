
function greeting(exitingNames) {
    var oldNames = [] || exitingNames;

    function pushNames (name){
        var str = (textBoxElem.value).toLowerCase();                        
        var name =str.charAt(0).toUpperCase() + str.slice(1);

        if (!oldNames.includes(name)) {
            oldNames.push(names);
    
        }
    }


    function getNames(){
        return oldNames;
    }

    function getCount(){
        return oldNames.length;
    }


    function greets(radioBtn, name) {

        var str = (textBoxElem.value).toLowerCase();
        var name =str.charAt(0).toUpperCase() + str.slice(1);
       
        if (radioBtn === "English") {
        return "Hello, " + name;
        }

        if (radioBtn === "IsiXhosa") {
        return "Molo, " + name;
        }

        if (radioBtn === "Swahili") {
            
            return "Jambo, " + name;
        }
       
    }

    function conditions(radioBtn, name){  

        if(!radioBtn && name === ""){
            return "Enter name and select a language!";
        }
    
        if (radioBtn && name === "") {
            return "Please enter a name!";
                
        }
    
        if (!radioBtn && name !== "") {
            return "Please select a language!"; 
        }
    }

    return {
        greets,
        pushNames,
        getNames,
        conditions,
        getCount,
    }
}
