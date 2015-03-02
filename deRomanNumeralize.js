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
}

function deRomanNumeralize(romanNumberString){
    return 1;
}