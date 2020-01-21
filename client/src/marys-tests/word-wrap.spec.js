const wordWrap = (userInput) => {
    if (typeof userInput != 'string') throw new Error('not a string');
    return userInput;
}

describe('word-wrap', () => {
    test('standard canary test', () => {
        expect(true).toEqual(true);
    });

    test('throw error if user input is not a string', () => {
        expect(() => {
            wordWrap(0);
        }).toThrow(new Error('not a string'))
    });

});