# romanNumerals

Trying out the roman numeral kata from http://agilekatas.co.uk/katas/romannumerals-kata.html

My basic approach was to parse out the strings letter by letter, or number by number, and recurse to get the complete string (or number).


Basically, the kata treats roman numerals as 13 distinct characters: M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, and I.
Which is an interesting way to deal with subtraction numerals (which have historically been nonstandard http://en.wikipedia.org/wiki/Roman_numerals#Alternative_forms)


A fun exercise, also an excuse to try to use node.js (and also powershell as the IDE, which wasn't a great choice).


each file consists of a runTests() function, that goes through a number of tests, testing either the romanNumeralize() or deRomanNumeralize() functions.
