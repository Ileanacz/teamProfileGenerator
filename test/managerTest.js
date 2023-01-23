const Manager = require('../lib/manager');

test('creates an Manager object', () => {
    const manager = new Manager('Ileana', 90, 'ily.cz@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Ileana', 90, 'ily.cz@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 