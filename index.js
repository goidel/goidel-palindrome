module.exports = Phrase;

String.prototype.reverse = function(){return Array.from(this).reverse().join("");
}
function reverse(string) {
	return Array.from(string).reverse().join("");
}
function Phrase(content) { 
	this.content = content;

	this.processor = function(string){
		return string.toLowerCase();
	}
	this.processedContent = function () {
		//return this.processor(this.content);
		return this.letters().toLowerCase();

	};
	this.letters = function letters() {
		let theLetters = [];
		for (let i = 0; i < this.content.length; i++) {
			if (this.content.charAt(i).match(/[a-zA-Z]/)) {
				theLetters.push(this.content.charAt(i));
			}
		}
		return theLetters.join("");
	}
	this.palindrome = function palindrome() {
		return this.processedContent() === reverse(this.processedContent());
	}
}
function TranslatedPhrase(content, translation){
	this.content = content;
	this.translation = translation;
	this.processedContent = function () {
		return this.processor(this.translation);
	}
}
TranslatedPhrase.prototype = new Phrase();

