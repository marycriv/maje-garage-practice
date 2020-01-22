
const wordsWrapped = (sentence, col) => {
    if(sentence.length === col) return sentence;

    let wrapped = [];
    let currCount = 0;

    const sentenceArr = sentence.split(" ");

    for(let i = 0; i < sentenceArr.length; i++) {
        const word = i === sentenceArr.length - 1 ? sentenceArr[i] : sentenceArr[i] + " "; 

        if(word.length > col) {
            for(let i = 0; i < word.length; i++) {
                if(currCount === col) {
                    currCount = 1;
                    wrapped.push("\n");
                } else {
                    currCount += 1;
                }
                wrapped.push(word[i]);
            }
        }
    };

    return wrapped.join("");
}

describe('word-wrap', () => {
    test('a', () => {
        expect(wordsWrapped('a', 1)).toEqual('a')
    });

    test('cat', () => {
        expect(wordsWrapped('cat', 1)).toEqual('c\na\nt')
    });

    test('', () => {
        expect(wordsWrapped('aaa bbb ccc', 2)).toEqual('aa\na \nbb\nb \ncc \nc')
    })

});