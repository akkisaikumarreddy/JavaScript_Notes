// Using Single Quote
var a = 'Akki'
console.log(a)

// Using Double Quote
var b = "Sai Kumar"
console.log(b)


// -----------------------------------------
// Create String using Constructor
// -----------------------------------------
var b = new String('Reddy')
console.log(b)


// -----------------------------------------
// Template Literals (String Interpolation)
// ------------------------------------------
var s1 = 'akki'
var s2 = `My name is ${s1}`
console.log(s2)


// Empty String
var a1 = '';
var a2 = "";
console.log(a1);
console.log(a2);


// Multiline Strings (ES6 and later)
var s = `
    This is a
    Multiline
    String`;
console.log(s);


// --------------------------------------------------
// Basic Operations on JavaScript Strings
// --------------------------------------------------


//  length of a String
var a = 'JavaScript'
var len = a.length

console.log("String Length: " + len);


// String Concatenation
var s1 = 'Java';
var s2 = 'Script';
var res = s1 + s2;

console.log("Concatenated String: " + res);


// Escape Characters
var s1 = "\'HTML\'- Hyper Text Markup Language"
var s2 = "\"HTML\"- Hyper Text Markup Language"
var s3 = "\\HTML\\- Hyper Text Markup Language"
console.log(s1);
console.log(s2);
console.log(s3);


// Breaking Long Strings
var s = "'JavaScript' is a programming language \ used to create dynamic content for websites";
console.log(s);


//  Find Substring of a String
var s1 = "JavaScript Tutorial";
var s2 = s1.substring(0,13);
console.log(s2);


// Convert String to Uppercase and Lowercase
var s = "JavaScript"
var uCase = s.toUpperCase();
var lCase = s.toLowerCase();
console.log(uCase);
console.log(lCase);


// String Search
var s1  = 'Akki Sai Kumar Reddy';
var i = s1.indexOf('Sai')
console.log(i);


// String Replace
var s1 = "Learn HTML in Udemy";
var s2 = s1.replace("HTML", "JavaScript") 
console.log(s2);


//  Trimming Whitespace from String
var a = "       Learn JavaScript        ";
var b = a.trim();
console.log(a);
console.log(b);

// TrimStart and TrimEnd
var a = "       Learn JavaScript        ";
var b = a.trimStart();
var c = a.trimEnd();
console.log(b);
console.log(c);

// Access Characters from String
var s1 = "Learn JavaScript";
var s2 = s1[6];
console.log(s2)
s2=s1.charAt(6);
console.log(s2);


// String Comparison
var s1 = "Akki";
var s2 = new String("Akki");
console.log(s1 == s2);      // true (type coercion)
console.log(s1 === s2);     // false (strict comparison)
console.log(s1.localeCompare(s2));      // 0 (means they are equal lexicographically)


// String charCodeAt
var s1 = "Akki Sai Kumar Reddy";
var s2 = s1.charCodeAt();
console.log(s2);


// String Startswith and Endswith
var a1 = "JavaScript";
var a2 = a1.startsWith("J");
var a3 = a1.endsWith("p");
console.log(a2);
console.log(a3);


// Sting Index
var s1 = "JavaScript";
var s2 = s1.indexOf("J");
var s3 = s1.indexOf("a");
var s4 = s1.indexOf("p");
console.log(s2);
console.log(s3);
console.log(s4);


// String includes
var s1 = "JavaScript";
var s2 = s1.includes("S");
console.log(s2)


// String Repeat
var s1 = "Js ";
var s2 = s1.repeat(10);
console.log(s1);
console.log(s2);

// String Split
var s1 = "Java Script"
var s2 = s1.split();
var s3 = s1.split("");
var s4 = s1.split(" ");
var s5 = s1.split("-");

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);


// String Concat
var s1 = "JavaScript";
var s2 = s1.concat(" HTML CSS");
console.log(s2);