/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

// MY SOLUTION
String.prototype.isUpperCase = function() {
    return /^[^a-z]*$/.test(this);
};
// the first ^ anchors the beginning of the string
// the second ^ negates the character class (e.g. not lowercase)
// the * quanitifies the expression, allowing it to occur 0 or more times
// the $ anchors the end of the string

// Without ^ and $, the regular expression would still work in most cases, but it might give unexpected results for strings that contain a mix of uppercase and lowercase letters. For example, without the anchors, the regular expression /[^a-z]*/ would match any substring within the string that doesn't contain lowercase letters, potentially leading to incorrect results.

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase();
};

// strict evalution does not work here. apparently same value but not same type.