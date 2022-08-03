import User from "../models/User";


class authService {
    async registration(userName: String, password: String) {
            await User.create({ userName, password });
    }
}

export default new authService();