const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Kevin', 1, 'klozano17@gmail.com', 444-444-4444);

    expect(manager.name).toBe('Kevin');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('gets manager name', () => {
    const manager = new Manager('Kevin', 1, 'klozano17@gmail.com', 444-444-4444);

    expect(manager.getName()).toEqual(expect.any(String));

});

test('gets manager id', () => {
    const manager = new Manager('Kevin', 1, 'klozano17@gmail.com', 444-444-4444);

    expect(manager.getId()).toEqual(expect.any(Number));

});

test('gets manager email', () => {
    const manager = new Manager('Kevin', 1, 'klozano17@gmail.com', 444-444-4444);

    expect(manager.getEmail()).toEqual(expect.any(String));

});

test('gets manager role', () => {
    const manager = new Manager('Kevin', 1, 'klozano17@gmail.com', 444-444-4444);

    expect(manager.getRole()).toBe('Manager');

});

test('gets manager office number', () => {
    const manager = new Manager('Kevin', 1, 'klozano17@gmail.com', 444-444-4444);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));

});

