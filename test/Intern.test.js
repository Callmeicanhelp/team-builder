const {Employee, Manager, Engineer, Intern} = require('../Intern');

describe('Intern', () => {
    it('should create an object with a name, id, email, school, and role', () => {
        const intern = new Intern('Bre', 3, 'Bre@gmail.com', 'MSU', 'intern');

        expect(intern.getName()).toEqual('Bre');

        expect(intern.getId()).toEqual(3);

        expect(intern.getEmail()).toEqual('Bre@gmail.com');

        expect(intern.getSchool()).toEqual('MSU')

        expect(intern.getRole()).toEqual('Intern');
    })
})