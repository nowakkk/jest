const functions = require('./functions');

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database initialized...');
const closeDatabase = () => console.log('Database closed...');
const nameCheck = () => console.log('Checking name...');

describe('Checking names', () => {
    beforeEach(() => nameCheck());

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toEqual('Karen');
    });

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toEqual('Jeff');
    });
});


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('value should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('same value should be returned', () => {
    let testNumber = 5;
    expect(functions.checkValue(testNumber)).toBe(testNumber);
});

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Krzysztof Nowak object', () => {
    expect(functions.createUser()).toStrictEqual({ firstName: "Krzysztof", lastName: "Nowak" });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 80; 
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no "i" in "team"', () => {
    expect('teIam').not.toMatch(/i/);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = [ "john", "karen", "admin"];
    expect(usernames).toContain("admin");
});

// working with async data

// promise
test('User fetched name should be Leanne Graham', () => {
    // expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham");
        })
})

// async/await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
})