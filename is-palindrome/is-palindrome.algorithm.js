function isPalindrome(string) {
    string = string.toLowerCase();
    let charactersArr = string.split('');
    let validCharacters = 'abcdefghijklmnopqrsuvwxyz'.split('');

    let lettersArr = [];
    charactersArr.forEach(character => {
        if (validCharacters.indexOf(character) > -1) {
            lettersArr.push(character);
        }
    });

    if (lettersArr.join('') !== lettersArr.reverse().join('')) {
        return false;
    } 
    return true;
}

console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome('race car'));
console.log(isPalindrome('javascript'));