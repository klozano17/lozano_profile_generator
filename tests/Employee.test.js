const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Kevin', 1, 'klozano17@gmail.com');

    expect(employee.name).toBe('Kevin');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Kevin', 1, 'klozano17@gmail.com');
    
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Kevin', 1, 'klozano17@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Kevin', 1, 'klozano17@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Employee('Kevin', 1, 'klozano17@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});

