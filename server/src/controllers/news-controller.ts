import { NextFunction, Request, Response } from "express";
import newsService from "../service/news-service";


class NewsController {
    async cretaeNews(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, body } = req.body;
            await newsService.create(title, body)
            return res.status(201).json(`Новость ${title} успешно добавлена`)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allNews = await newsService.getAll()
            return res.status(201).json(allNews)
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
            return news ? res.status(200).json('Новость успешно изменена') : res.status(404).json({ message: 'Новость не найдена' })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
    async deleteNews(req: Request, res: Response, next: NextFunction) {
        try {
            const newsId = req.params.id;
            const news = await newsService.deleteNews(newsId)
            return news ? res.status(200).json('Новость успешно удалена') : res.status(404).json({ message: 'Новость не найдена' })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default new NewsController();