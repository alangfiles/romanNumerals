runTests();

function runTests(){
    try{
      testRomanNumeralToArabic();
      testMultipleNumbers();
      testSubtractionNumerals();
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
    if(deRomanNumeralize("CDXCIX") != 499){
        throw new Error ("roman CDXCIX doesn't return Arabic 499");
    }
    if(deRomanNumeralize("MCMLVI") != 1956){
        throw new Error ("roman MCMLVI doesn't return Arabic 1956");
    }
}

function testSubtractionNumerals(){
    if(deRomanNumeralize("IV") != 4){
        throw new Error ("Roman IV doesn't return Arabic 4 ");
    }
    if(deRomanNumeralize("IX") != 9){
        throw new Error ("Roman IX doesn't return Arabic 9");
    }
    if(deRomanNumeralize("XL") != 40){
        throw new Error ("Roman XL doesn't return Arabic 40");
    }
    if(deRomanNumeralize("XC") != 90){
        throw new Error ("Roman XC doesn't return Arabic 90");
    }
    if(deRomanNumeralize("CD") != 400){
        throw new Error ("Roman CD doesn't return Arabic 400");
    }
    if(deRomanNumeralize("CM") != 900){
        throw new Error ("Roman CM doesn't return Arabic 900");
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
    var checkString = "";

    if(romanNumberString == ""){
        return 0;
    }
    
    if(romanNumberString.length >= 2){
        //check if the 2 characters fit one of the subtraction numerals
        checkString = romanNumberString.slice(0,2);

        if(checkString == "CM"){
            return 900 + deRomanNumeralize(romanNumberString.slice(2));
        }
        else if(checkString == "CD"){
            return 400 + deRomanNumeralize(romanNumberString.slice(2));
        }
        else if(checkString == "XC"){
            return 90 + deRomanNumeralize(romanNumberString.slice(2));
        }
        else if(checkString == "XL"){
            return 40 + deRomanNumeralize(romanNumberString.slice(2));
        }
        else if(checkString == "IX"){
            return 9 + deRomanNumeralize(romanNumberString.slice(2));
        }
        else if(checkString == "IV"){
            return 4 + deRomanNumeralize(romanNumberString.slice(2));
        }

    }

    //otherwise, just use the single number
    checkString = romanNumberString.slice(0,1);
    
    if(checkString == "M"){
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