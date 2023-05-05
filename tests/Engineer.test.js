const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Kevin', 1, 'klozano17@gmail.com', 'klozano17');

    expect(engineer.name).toBe('Kevin');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Kevin', 1, 'klozano17@gmail.com', 'klozano17');

    expect(engineer.getName()).toEqual(expect.any(String));

});

test('gets engineer id', () => {
    const engineer = new Engineer('Kevin', 1, 'klkozano17@gmail.com', 'klozano17');

    expect(engineer.getId()).toEqual(expect.any(Number));

});

test('gets engineer email', () => {
    const engineer = new Engineer('Kevin', 1, 'klozano17@gmail.com', 'klozano17');

    expect(engineer.getEmail()).toEqual(expect.any(String));

});

test('gets engineer role', () => {
    const engineer = new Engineer('Kevin', 1, 'klozano17@gmail.com', 'klozano17');

    expect(engineer.getRole()).toBe('Engineer');

});

test('gets engineer github', () => {
    const engineer = new Engineer('Kevin', 1, 'klozano17@gmail.com', 'klozano17');

    expect(engineer.getGithub()).toEqual(expect.any(String));

});

