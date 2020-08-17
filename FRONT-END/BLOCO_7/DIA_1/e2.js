const LONGESTWORD = frase => {
    let word = 'a';
    const arrayWords = frase.split(' ');
    for(let i = 0; i < arrayWords.length; i += 1) {
        if(word.length < arrayWords[i].length) {
            word = arrayWords[i]
        }        
    }
    return word;
}

console.log(LONGESTWORD('ontem hoje amanhã'));
