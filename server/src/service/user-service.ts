import User from "../models/User";
import bcrypt from 'bcryptjs';


class authService {
    async registration(userName: string, password: string) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        await User.create({ userName, password: hashPassword });
    }

}

export default new authService();