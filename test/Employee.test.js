const {Employee, Manager, Engineer, Intern} = require('../Employee');

describe('Employee', () => {
    it('should create an object with a name, id, email, and role', () => {
        const employee = new Employee("Lacey", 18, "Lacey@gmail.com", "employee");

        expect(employee.getName()).toEqual('Lacey');

        expect(employee.getId()).toEqual(18);

        expect(employee.getEmail()).toEqual('Lacey@gmail.com');
        
        expect(employee.getRole()).toEqual('Employee');
    })
})