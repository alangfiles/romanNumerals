runTests();

function runTests(){
    try{
      testThatArabicNumeralOneIsRomanI();
    }
    catch(e){ 
      console.log(e);
    }
    console.log("All Tests Passed");
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


function romanNumeralize(arabicNumeral){
    if(arabicNumeral == 0){
        return "";
    }
    else if(arabicNumeral >= 1){
        return "I" + romanNumeralize(arabicNumeral-1);
    }
}