const wordWrap = (text, columns) => {
    if (typeof text != 'string') throw new Error('not a string');
    if (typeof columns != 'number') throw new Error('not a number');

    if (text.length <= columns) {
        return text;
    } else {
        return
    }
}

describe('word-wrap', () => {
    test('standard canary test', () => {
        expect(true).toEqual(true);
    });

    test('throw error if text is not a string', () => {
        expect(() => {
            wordWrap(0, 0);
        }).toThrow(new Error('not a string'))
    });

    test('throw error if columns is not a number', () => {
        expect(() => {
            wordWrap('test', 'test');
        }).toThrow(new Error('not a number'))
    });

    test('automatically prints text shorter than columns', () => {
        expect(wordWrap('test', 5)).toEqual('test');
    });

});