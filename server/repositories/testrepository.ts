import { Repository } from './repository';
class TestRepository extends Repository {
    constructor() {
        super();
    }

    async getAllTests() {
        const results = await this.knex.select('*').from('test');
        return results;
    }
}

export { TestRepository };