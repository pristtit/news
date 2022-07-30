import NewsSchema from "../models/News";

class NewsService {
    async create(title: String, body: String) {
        await NewsSchema.create({ title, body })
    }

    async getAll() {
        d
    }
}

export default new NewsService();