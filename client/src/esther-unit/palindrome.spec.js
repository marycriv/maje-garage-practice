
const isPalindrome = (word) => {
    if(word.length < 1) return false;

    let start = 0;
    let end = word.length - 1;

    while(start < end) {
        if(word[start] === " ") start += 1;
        if(word[end] === " ") end -= 1;

        if(word[start] !== word[end]) return false;
        
        start += 1;
        end -= 1;
    }

    return true;
}

describe('is-palindrome', () => {
    test('a is a palindrome', () => {
        expect(isPalindrome('a')).toEqual(true)
    });

    test('mom', () => {
        expect(isPalindrome('mom')).toEqual(true)
    });

    test('dude is not a palindrome', () => {
        expect(isPalindrome('dude')).toEqual(false)
    });

    test('mom mom', () => {
        expect(isPalindrome('mom mom')).toEqual(true)
    });

    test('mom dad', () => {
        expect(isPalindrome('mom dad')).toEqual(false)
    });

    test(' ', () => {
        expect(isPalindrome(' ')).toEqual(true)
    });

    test('', () => {
        expect(isPalindrome('')).toEqual(false)
    });

    test('moM', () => {
        expect(isPalindrome('moM')).toEqual(false)
    });

    test('race car', () => {
        expect(isPalindrome('race car')).toEqual(true)
    });

    test('a man a plan a canal panama', () => {
        expect(isPalindrome('a man a plan a canal panama')).toEqual(true)
    });
});