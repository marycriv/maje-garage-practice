const wordWrap = (stringInput, integerInput) => {
    if (typeof stringInput != 'string') throw new Error('not a string');
    if (typeof integerInput != 'number') throw new Error('not a number');

    if (stringInput.length <= integerInput) {
        console.log('stringInput');
    }
}

describe('word-wrap', () => {
    test('standard canary test', () => {
        expect(true).toEqual(true);
    });

    test('throw error if first input is not a string', () => {
        expect(() => {
            wordWrap(0, 0);
        }).toThrow(new Error('not a string'))
    });

    test('throw error if second input is not a number', () => {
        expect(() => {
            wordWrap('test', 'test');
        }).toThrow(new Error('not a number'))
    });

    test('automatically prints strings shorter than second input', () => {
        expect(wordWrap('test', 5)).toEqual(console.log('stringInput'));
    });

});