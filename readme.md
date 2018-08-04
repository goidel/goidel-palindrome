This is a sample NPM module created in Learn Enough JavaScript to Be Dangerous by Michael Hartl. This is Goidel's repo the exerciese of chapter 8 in the LEJSTBD turorial

The module can be used as follows:


```
$ npm install --global goidel-palindrome
$ vim test.js
let Phrase = require("goidel-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```