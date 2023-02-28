function Palindrome() {
    if (IsItPalindrome()) {
        document.getElementById('text').textContent = "It is a palindrome!";
    } else {
        document.getElementById('text').textContent = "It isn't a palindrome!";
    }
}
function IsItPalindrome() {
    let value = document.getElementById('value').value;
    //Reverses a string
    let valueReversed = value.split("").reverse().join("");
    return value == valueReversed;
}