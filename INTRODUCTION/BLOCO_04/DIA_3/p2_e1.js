console.log(verificaPalindrome("ala"));

function verificaPalindrome(string) {
    let inverso = string.split("").reverse().join("");
    if(inverso === string) {
        return true;
    } else {
        return false;
    }
};
