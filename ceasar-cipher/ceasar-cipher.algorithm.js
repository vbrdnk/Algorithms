function ceasarCipher(str, num) {
	num = num % 26;
	let lowerCaseString = str.toLowerCase();
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let newString = '';

	for (let i = 0; i < lowerCaseString.length; i++) {
		let currentLetter = lowerCaseString[i];
		if (currentLetter === ' ') {
			newString += currentLetter;
			continue;
		}
		let currentIndex = alphabet.indexOf(currentLetter);
		let newIndex = currentIndex + num;

		if (newIndex > 25) {
			newIndex -= 26;
		} else if (newIndex < 0) {
			newIndex += 26;
		}

		if (str[i] === str[i].toUpperCase()) {
			newString += alphabet[newIndex].toUpperCase();
		} else {
			newString += alphabet[newIndex];
		}
	}

	return newString;
}

console.log(ceasarCipher('Zoo Keeper', 2));
console.log(ceasarCipher('Big Car', -16));
console.log(ceasarCipher('JavaScript', -900));