class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    if (name = undefined || id == undefined || email== undefined || role == undefined) {
        throw new Error('Name, email, and role need to be provided')
    }

    getName() {
        return this.name;
    }  
    getId() {
        if (this.id <= 0) {
            throw new Error("ID must be greater than 0")
        }
       return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Intern';
    }
}

module.exports = {Intern};