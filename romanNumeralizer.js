runTests();

function runTests(){
    try{
      testThatArabicNumeralOneIsRomanI();
      testThatArabicNumeralThreeIsRomanIII();
      testThatArabicNumeralSubtraction();
      console.log("All Tests Passed");
    }
    catch(e){ 
      console.log(e);
    }
    
}

function testThatArabicNumeralOneIsRomanI(){
    if(romanNumeralize(1) != "I"){
        throw new Error ("Arabic 1 doesn't return Roman I");
    }
}
function testThatArabicNumeralThreeIsRomanIII(){
    if(romanNumeralize(3) != "III"){
        throw new Error ("Arabic 3 doesn't return Roman III");
    }
}
function testThatArabicNumeralSubtraction(){
    if(romanNumeralize(4) != "IV"){
        throw new Error ("Arabic 4 doesn't return Roman IV");
    }
    if(romanNumeralize(9) != "IX"){
        throw new Error ("Arabic 9 doesn't return Roman IX");
    }
}

function romanNumeralize(arabicNumeral){
    if(arabicNumeral == 0){
        return "";
    }
    else if(arabicNumeral >= 9){
        return "IX" + romanNumeralize(arabicNumeral-9);
    }
    else if(arabicNumeral >= 5){
        return "V" + romanNumeralize(arabicNumeral-5);
    }
    else if(arabicNumeral >= 4){
        return "IV" + romanNumeralize(arabicNumeral-4);
    }
    else if(arabicNumeral >= 1){
        return "I" + romanNumeralize(arabicNumeral-1);
    }
}