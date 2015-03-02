runTests();

function runTests(){
    try{
      testSingleArabicNumerals();
      testSubtractionArabicNumeral();
      testBadInput();
      testMultipleNumers();
      console.log("All Tests Passed");
    }
    catch(e){ 
      console.log(e);
    }
    
}

function testBadInput(){
    if(romanNumeralize(-1) != "Error: Bad Input"){
        throw new Error ("Roman Numeralizer Doesn't handle bad input");
    }
}

function testMultipleNumers(){
    if(romanNumeralize(499) != "CDXCIX"){
        throw new Error ("Arabic 499 doesn't return roman CDXCIX");
    }
}

function testSingleArabicNumerals(){
    if(romanNumeralize(1) != "I"){
        throw new Error ("Arabic 1 doesn't return Roman I");
    }
    if(romanNumeralize(5) != "V"){
        throw new Error ("Arabic 5 doesn't return Roman V");
    }
    if(romanNumeralize(10) != "X"){
        throw new Error ("Arabic 10 doesn't return Roman X");
    }
    if(romanNumeralize(50) != "L"){
        throw new Error ("Arabic 50 doesn't return Roman L");
    }
    if(romanNumeralize(100) != "C"){
        throw new Error ("Arabic 100 doesn't return Roman C");
    }
    if(romanNumeralize(500) != "D"){
        throw new Error ("Arabic 500 doesn't return Roman D");
    }
    if(romanNumeralize(1000) != "M"){
        throw new Error ("Arabic 1000 doesn't return Roman M");
    }
}

function testSubtractionArabicNumeral(){
    if(romanNumeralize(4) != "IV"){
        throw new Error ("Arabic 4 doesn't return Roman IV");
    }
    if(romanNumeralize(9) != "IX"){
        throw new Error ("Arabic 9 doesn't return Roman IX");
    }
    if(romanNumeralize(40) != "XL"){
        throw new Error ("Arabic 40 doesn't return Roman XL");
    }
    if(romanNumeralize(90) != "XC"){
        throw new Error ("Arabic 90 doesn't return Roman XC");
    }
    if(romanNumeralize(400) != "CD"){
        throw new Error ("Arabic 400 doesn't return Roman CD");
    }
    if(romanNumeralize(900) != "CM"){
        throw new Error ("Arabic 900 doesn't return Roman CM");
    }
}

function romanNumeralize(arabicNumeral){
    if(arabicNumeral == 0){
        return "";
    }
    else if(arabicNumeral >= 1000){
        return "M" + romanNumeralize(arabicNumeral-1000);
    }
    else if(arabicNumeral >= 900){
        return "CM" + romanNumeralize(arabicNumeral-900);
    }
    else if(arabicNumeral >= 500){
        return "D" + romanNumeralize(arabicNumeral-500);
    }
    else if(arabicNumeral >= 400){
        return "CD" + romanNumeralize(arabicNumeral-400);
    }
    else if(arabicNumeral >= 100){
        return "C" + romanNumeralize(arabicNumeral-100);
    }
    else if(arabicNumeral >= 90){
        return "XC" + romanNumeralize(arabicNumeral-90);
    }
    else if(arabicNumeral >= 50){
        return "L" + romanNumeralize(arabicNumeral-50);
    }
    else if(arabicNumeral >= 40){
        return "XL" + romanNumeralize(arabicNumeral-40);
    }
    else if(arabicNumeral >= 10){
        return "X" + romanNumeralize(arabicNumeral-10);
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
    else{
    //if it didn't fit into the above cases, it must be bad input
        return "Error: Bad Input";
    }
}