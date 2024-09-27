// JavaScript code to analyze a sentence
let word = 0;
let vowel = 0;
let i = 0;
const str = "Hey How are you?, i'm fine thanks.";

for (let i = 0; i < str.length; i++) {
	if (
		str[i] != "," &&
		str[i] != ";" &&
		str[i] != ":" &&
		str[i] != "!" &&
		str[i] != "?"
	) {
		if ("aeiouAEIOU".includes(str[i])) {
			vowel++;
		} else if (str[i] === " " || str[i] === "." || str[i] === "'") {
			word++;
		}
	}
}

console.log("The length of the sentence is:", str.length);
console.log("The number of words in the sentence is:", word);
console.log("The number of vowels in the sentence is:", vowel);
