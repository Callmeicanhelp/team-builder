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

module.exports = {Employee};