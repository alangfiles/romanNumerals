runTests();

function runTests(){
    try{
      testRomanNumeralToArabic();
      console.log("All Tests Passed");
    }
    catch(e){ 
      console.log(e);
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
    if(romanNumberString == "M"){
        return 1000;
    }
    else if(romanNumberString == "D"){
        return 500;
    }
    else if(romanNumberString == "C"){
        return 100;
    }
    else if(romanNumberString == "L"){
        return 50;
    }
    else if(romanNumberString == "X"){
        return 10;
    }
    else if(romanNumberString == "V"){
        return 5;
    }
    else if(romanNumberString == "I"){
        return 1;
    }
}