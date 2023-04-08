const reverseString = require('./reverseString');

test('reverseString function exist', () => {
    expect(reverseString).toBeDefined();
});

test('string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
})