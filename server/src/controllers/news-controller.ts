import { NextFunction, Request, Response } from "express";
import newsService from "../service/news-service";


class NewsController {
    async cretaeNews(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, body } = req.body;
            await newsService.create(title, body)
            const allNews = await newsService.getAll()
            return res.status(201).json(allNews.reverse())
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allNews = await newsService.getAll()
            return res.status(201).json(allNews.reverse())
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const newsId = req.params.id;
            const news = await newsService.getById(newsId)
            return news ? res.status(200).json(news) : res.status(404).json({ message: 'Новость не найдена' })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
    async updateNews(req: Request, res: Response, next: NextFunction) {
        try {
            const newsId = req.params.id;
            const news = await newsService.updateNews(newsId, req.body)
            const allNews = await newsService.getAll()
            return news ? res.status(201).json(allNews.reverse()) : res.status(404).json({ message: 'Новость не найдена' })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
    async deleteNews(req: Request, res: Response, next: NextFunction) {
        try {
            const newsId = req.params.id;
            const news = await newsService.deleteNews(newsId)
            const allNews = await newsService.getAll()
            return news ? res.status(200).json(allNews.reverse()) : res.status(404).json({ message: 'Новость не найдена' })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default new NewsController();