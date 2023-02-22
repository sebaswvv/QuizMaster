import { UserRepository } from "../repositories/userrepository";

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUserByUsername(username: string) {
        return this.userRepository.getUserByUsername(username);
    }


}

export { UserService };