function analyzeSentence(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;
    let inWord = false;
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        if (char === '.') {
            length++;
            break;
        }

        length++;

        if (vowelSet.has(char)) {
            vowels++;
        }

        if (char === ' ') {
            if (inWord) {
                words++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }

    if (inWord) {
        words++;
    }

    return {
        length: length,
        words: words,
        vowels: vowels
    };
}

// Example usage
const sentence = "This is a test sentence.";
const result = analyzeSentence(sentence);
console.log(`Length: ${result.length}`);
console.log(`Words: ${result.words}`);
console.log(`Vowels: ${result.vowels}`);
