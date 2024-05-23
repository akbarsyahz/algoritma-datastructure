function longest(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, '');
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence));