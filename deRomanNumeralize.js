runTests();

function runTests(){
    try{
      testRomanNumeralToArabic();
      testMultipleNumbers();
      console.log("All Tests Passed");
    }
    catch(e){ 
      console.log(e);
    }
    
}

function testMultipleNumbers(){
    if(deRomanNumeralize("DX") != 510){
        throw new Error ("roman DX doesn't return Arabic 510");
    }
    if(deRomanNumeralize("MCLVI") != 1156){
        throw new Error ("roman MCLVI doesn't return Arabic 1156");
    }
}


function testRomanNumeralToArabic(){
    if(deRomanNumeralize("I") != 1){
        throw new Error ("Roman I doesn't return arabic 1");
    }
    if(deRomanNumeralize("V") != 5){
        throw new Error ("Roman V doesn't return arabic 5");
    }
    if(deRomanNumeralize("X") != 10){
        throw new Error ("Roman X doesn't return arabic 10");
    }
    if(deRomanNumeralize("L") != 50){
        throw new Error ("Roman L doesn't return arabic 50");
    }
    if(deRomanNumeralize("C") != 100){
        throw new Error ("Roman C doesn't return arabic 100");
    }
    if(deRomanNumeralize("D") != 500){
        throw new Error ("Roman D doesn't return arabic 500");
    }
    if(deRomanNumeralize("M") != 1000){
        throw new Error ("Roman M doesn't return arabic 1000");
    }
}

function deRomanNumeralize(romanNumberString){

    var checkString = romanNumberString.slice(0,1);
    if(checkString == ""){
        return 0;
    }
    else if(checkString == "M"){
        return 1000 + deRomanNumeralize(romanNumberString.slice(1));
    }
    else if(checkString == "D"){
        return 500  + deRomanNumeralize(romanNumberString.slice(1));
    }
    else if(checkString == "C"){
        return 100 + deRomanNumeralize(romanNumberString.slice(1));
    }
    else if(checkString == "L"){
        return 50 + deRomanNumeralize(romanNumberString.slice(1));
    }
    else if(checkString == "X"){
        return 10 + deRomanNumeralize(romanNumberString.slice(1));
    }
    else if(checkString == "V"){
        return 5 + deRomanNumeralize(romanNumberString.slice(1));
    }
    else if(checkString == "I"){
        return 1 + deRomanNumeralize(romanNumberString.slice(1));
    }
}