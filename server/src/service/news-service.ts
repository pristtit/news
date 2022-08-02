import NewsSchema, { INewsModel } from "../models/News";

class NewsService {
    async create(title: String, body: String) {
        await NewsSchema.create({ title, body })
    }

    async getAll() {
        return await NewsSchema.find()

    }

    async getById(newsId: String) {
        return await NewsSchema.findById(newsId)
    }
    
    async updateNews(newsId: String,body: INewsModel) {
        const news = await NewsSchema.findById(newsId)
        if (news) {
            await news.set(body).save()
            return news;
        }
    }
    
    async deleteNews(newsId: String) {
        return await NewsSchema.findByIdAndDelete(newsId)
    }
}

export default new NewsService();