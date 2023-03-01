import { Repository } from './repository';
class UserRepository extends Repository {    
    constructor() {
        super();
    }

    async getUserByUsername(username: string) {
        return await this.knex.select('*').from('users').where('username', username);
    }    

    async registerUser(username: string, password: string, email: string) {
        // insert user with role user
        return await this.knex('users').insert({ username: username, password: password, email: email, role: "user" });
    }
}

export { UserRepository };