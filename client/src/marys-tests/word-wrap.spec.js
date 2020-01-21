const wordWrap = (stringInput, integerInput) => {
    if (typeof stringInput != 'string') throw new Error('not a string');
    if (typeof integerInput != 'integer') throw new Error('not an integer');
    return stringInput, integerInput;
}

describe('word-wrap', () => {
    test('standard canary test', () => {
        expect(true).toEqual(true);
    });

    test('throw error if first input is not a string', () => {
        expect(() => {
            wordWrap(0);
        }).toThrow(new Error('not a string'))
    });

    test('throw error if second input is not an integer', () => {
        expect(() => {
            wordWrap('test');
        }).toThrow(new Error('not an integer'))
    });



});