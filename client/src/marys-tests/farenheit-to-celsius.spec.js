describe('farenheit-to-celsius', () => {
    test('canary verified test tools', () => {
        expect(true).toEqual(true);
    });

    test('32 degrees farenheit is 0 degrees celsius', () => {
        expect(farenheitToCelcius(32)).toEqual(0);
    });
});