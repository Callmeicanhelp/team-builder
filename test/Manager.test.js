const {Employee, Manager, Engineer, Intern} = require('../Manager');

describe('Manager', () => {
    it('should create an object with a name, id, email, github, and role', () => {
        const manager = new Manager('Tristin', 7, 'Tristin@gmail.com', 18);

        expect(manager.getName()).toEqual('Tristin');

        expect(manager.getId()).toEqual(7);

        expect(manager.getEmail()).toEqual('Tristin@gmail.com');

        expect(manager.getOfficeNumber()).toEqual(18);

        expect(manager.getRole()).toEqual('Manager');
    })
})