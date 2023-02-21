import { TestRepository } from '../repositories/testrepository';

class TestService {
    private testRepository: TestRepository;

    constructor() {
        this.testRepository = new TestRepository();
    }

    async getAllTests() {
        const results = await this.testRepository.getAllTests();
        return results;
    }
}

export { TestService };