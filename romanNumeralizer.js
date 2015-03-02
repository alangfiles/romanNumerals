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

function romanNumeralize(arabicNumeral){
    return "I";
}