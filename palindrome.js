let str = "aman";

//reverse the string
let str1 = "";
for (let i = str.length - 1; i >= 0; i--) {
    str1 = str1 + str[i];
}

if (str == str1) {
    console.log(" Palindrome");
}
else {
    console.log("Not A Palindrome");
}