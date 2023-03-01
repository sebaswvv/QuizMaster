import { UserRepository } from "../repositories/userrepository";
const bcrypt = require('bcrypt');

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUserByUsername(username: string) {
        // TODO make user object
        return this.userRepository.getUserByUsername(username);
    }

    async registerUser(username: string, password: string, email: string) {
        // encrypt password
        const encryptedPassword = this.encryptPassword(password);
        return this.userRepository.registerUser(username, encryptedPassword, email);
    }

    encryptPassword(password: string) {
        const salt = process.env.SALT;
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }


}

export { UserService };