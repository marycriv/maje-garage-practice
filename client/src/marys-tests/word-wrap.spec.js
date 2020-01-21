const wordWrap = (text, columns) => {
    if (typeof text != 'string') throw new Error('not a string');
    if (typeof columns != 'number') throw new Error('not a number');

    const rows = [];
    while (text.length > columns) {
        const spaceIndex = text.lastIndexOf(' ', columns);
        const index = spaceIndex > -1 ? Math.min(spaceIndex, columns) : columns;

        rows.push(text.substring(0, index));
        text = text.substring(index).trim();
    }

    rows.push(text);
    return rows.join('\n');
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

    test('{a, 1} => a', () => {
        expect(wordWrap('a', 1)).toEqual('a');
    })

    test('{aa, 1} => a a', () => {
        expect(wordWrap('aa', 1)).toEqual('a\na');
    })

});