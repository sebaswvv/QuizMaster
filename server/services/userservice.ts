import { UserRepository } from "../repositories/userrepository";
const bcrypt = require('bcrypt');

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUserByUsername(username: string) {
        return this.userRepository.getUserByUsername(username);
    }

    async checkUserNameExists(username: string) {
        return this.userRepository.checkUserNameExists(username);
    }

    async registerUser(username: string, password: string, email: string) {
        const encryptedPassword = bcrypt.hashSync(password, process.env.SALT);
        return this.userRepository.registerUser(username, encryptedPassword, email);
    }
}

export { UserService };