const palindromeChecker = (userInput) => {
    if (typeof userInput != 'string') throw new Error('not a string');
    if (userInput.length <= 0) throw new Error('no empty strings allowed');

}

describe('palindrome-tester', () => {
    test('canary validation tool', () => {
        expect(true).toEqual(true);
    });

    test('user input is string', () => {
        expect(() => {
            palindromeChecker(0);
        }).toThrow(new Error('not a string'))
    });

    test('user input is not empty string', () => {
        expect(() => {
            palindromeChecker('');
        }).toThrow(new Error('no empty strings allowed'))
    });

});