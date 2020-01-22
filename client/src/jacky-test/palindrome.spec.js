import { fail } from "assert";

const palindrome = (palindromeString) => {
    let start = 0;
    let end = palindromeString.length - 1;
    palindromeString = palindromeString.toLowerCase();

    if (palindromeString.length === 0) {
        return 'empty string'
    }

    while (start < end) {      
        if (palindromeString[start] === palindromeString[end]) {
            start += 1;
            end -= 1;
        }
        else if (palindromeString[start] === ' ') {
            start += 1;
        }
        else if (palindromeString[end] === ' ') {
            end -= 1;
        }
        else if (palindromeString[start] !== palindromeString[end]) {
            return false;
        }
    }
    return true;
}

describe('palindrome', () => {
    test('actual palindrome', () => {
        expect(palindrome('race car')).toEqual(true);
    });
    test('not a palindrome', () => {
        expect(palindrome('dog')).toEqual(false);
    });
    test('space', () => {
        expect(palindrome(' ')).toEqual(true);
    });
    test('empty string error', () => {
        expect(() => {
            palindrome('');
        }).toThrow(new Error('empty string'));
        try {
            palindrome('');
            fail('should throw exception');
        } catch (err) {
            expect(err).toEqual(new Error('empty string'))
        };
    });

    test('capitals', () => {
        expect(palindrome('moM')).toEqual(true);
    });

    test('long palindrome', () => {
        expect(palindrome('a man a plan a canal panama')).toEqual(true);
    });


});