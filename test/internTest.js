const Intern = require('../lib/intern');

test('creates an Intern object', () => {
    const intern = new Intern('Ileana', 90, 'ily.cz@gmail', 'UCR');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Ileana', 90, 'ily.cz@gmail', 'UCR');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Ileana', 90, 'ily.cz@gmail.com', 'UCR');

    expect(intern.getRole()).toEqual("Intern");
}); 