const jwt = require('jsonwebtoken');
import { config } from "../config/config";
import TokenSchema from "../models/Token";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, config.jwt.secretAccessKey, { expireIn: '15m' });
        const refreshToken = jwt.sign(payload, config.jwt.secretRefreshKey, { expireIn: '30d' });
        return {
            accessToken,
            refreshToken
        }
    }

    async saveRefToken(userId, refreshToken) {
        const tokenData = await TokenSchema.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await TokenSchema.create({ user: userId, refreshToken })
        return token;
    }
}

export default new TokenService();