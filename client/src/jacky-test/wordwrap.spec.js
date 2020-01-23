const wordwrap = (word, columnWidth) => {
    if (word[word.length - 1] === ' ') { return word.slice(0, word.length - 1); }
    if (word.length <= columnWidth) { return word; }

    return word.replace(/(.{columnWidth})/g,"$1\\n")
}


describe('wordwrap', () => {
    test('canary test', () => {
        expect(true).toEqual(true);
    });

    test('string length less than column width', () => {
        expect(wordwrap('dog', 4)).toEqual('dog');
    });

    test('string length equal to column width', () => {
        expect(wordwrap('poop', 4)).toEqual('poop');
    });

    test('ends with a space', () => {
        expect(wordwrap('dog ', 3)).toEqual('dog');
    });

    test('string length greater than column width', () => {
        expect(wordwrap('poops', 4)).toEqual('poop\ns');
    });
});