import { fail } from "assert";

const fahrenheitToCelsius = (degreesFahrenheit) => {
    if(typeof degreesFahrenheit !== 'number') throw new Error('not a number');
    return (degreesFahrenheit - 32) * (5/9);
}

describe('farenheit-to-celsius', () => {
    test('canary verified test tools', () => {
        expect(true).toEqual(true);
    });

    test('32 degrees fahrenheit is 0 degrees celsius', () => {
        expect(fahrenheitToCelsius(32)).toEqual(0);
    });

    test('212 degrees fahrenheit is 100 degrees celsius', () => {
        expect(fahrenheitToCelsius(212)).toEqual(100);
    });
    
    test('when value is not a number then throw an error', () => {
        expect(() => {
            fahrenheitToCelsius('test');
        }).toThrow(new Error('not a number'));

        try {
            fahrenheitToCelsius('test');
            fail('should throw exvception');
        } catch (err) {
            expect(err).toEqual(new Error('not a number'))
        };
        
    });
});