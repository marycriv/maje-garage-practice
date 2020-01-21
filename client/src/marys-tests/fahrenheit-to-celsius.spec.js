const fahrenheitToCelcius = (degreesFahrenheit) => {
    if (typeof degreesFahrenheit !== 'number') {
        throw new Error('the value is not a number')
    }  return (degreesFahrenheit - 32) * 5 / 9;
}

describe('farenheit-to-celsius', () => {
    test('canary verified test tools', () => {
        expect(true).toEqual(true);
    });

    test('32 degrees farenheit is 0 degrees celsius', () => {
        expect(fahrenheitToCelcius(32)).toEqual(0);
    });

    test('212 degrees farenheit is 100 degrees celsius', () => {
        expect(fahrenheitToCelcius(212)).toEqual(100);
    });

    test('when value is not a number then throw an error', () => {
        expect(() => {
            fahrenheitToCelcius('test');
        }).toThrow(new Error('the value is not a number'));
    });
});