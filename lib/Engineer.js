class Engineer extends Employee {
    constructor(name, id, email, GitHubUserName) {
        super(name, id, email);
        this.github = GitHubUserName;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = {Engineer};