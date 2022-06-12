const {Employee, Manager, Engineer, Intern} = require('../Engineer');

describe('Engineer', () => {
    it('should create an object with a name, id, email, github, and role', () => {
        const engineer = new Engineer('Dan', 3, 'Dan@gmail.com', 'callmeicanhelp', 'Engineer');

        expect(engineer.getName()).toEqual('Dan');

        expect(engineer.getId()).toEqual(3);

        expect(engineer.getEmail()).toEqual('Dan@gmail.com');

        expect(engineer.getGithub()).toEqual('callmeicanhelp')

        expect(engineer.getRole()).toEqual('Engineer');
    })
})