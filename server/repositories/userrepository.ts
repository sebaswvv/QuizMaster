import { Repository } from './repository';
class UserRepository extends Repository {    
    constructor() {
        super();
    }

    async getUserByUsername(username: string) {
        return await this.knex.select('*').from('users').where('username', username);
    }    
}

export { UserRepository };