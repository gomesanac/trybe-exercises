console.log(verificaStrings("Trybe", "be"));

function verificaStrings(stringWord, stringEnd) {
    let inversoWord = stringWord.split("").reverse().join("");
    let inversoEnd = stringEnd.split("").reverse().join("");

    for(let i = 0; i < inversoEnd.length; i+=1) {
        if(inversoWord[i] != inversoEnd[i]) {
            return false;
        } else {
            return true;
        }
    }
};
