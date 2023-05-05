const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Kevin', 1, 'klozano17@gmail.com', 'ECU');

    expect(intern.name).toBe('Kevin');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Kevin', 1, 'klozano17@gmail.com', 'ECU');

    expect(intern.getName()).toEqual(expect.any(String));

});

test('gets intern id', () => {
    const intern = new Intern('Kevin', 1, 'klozano17@gmail.com', 'ECU');

    expect(intern.getId()).toEqual(expect.any(Number));

});

test('gets intern email', () => {
    const intern = new Intern('Kevin', 1, 'klozano17@gmail.com', 'ECU');

    expect(intern.getEmail()).toEqual(expect.any(String));

});

test('gets intern role', () => {
    const intern = new Intern('Kevin', 1, 'klozano17@gmail.com', 'ECU');

    expect(intern.getRole()).toBe('Intern');

});

test('gets intern school', () => {
    const intern = new Intern('Kevin', 1, 'klozano17@gmail.com', 'ECU');

    expect(intern.getSchool()).toEqual(expect.any(String));

});

