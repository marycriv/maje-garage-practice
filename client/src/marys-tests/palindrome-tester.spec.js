const palindromeChecker = (userInput) => {
    if (typeof userInput != 'string') throw new Error('not a string');
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

});