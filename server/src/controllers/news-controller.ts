import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import News from "../models/News";
import newsService from "../service/news-service";

class NewsController {
    async cretaeNews(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, body } = req.body;
            await newsService.create(title, body)
            return res.status(201).json(`Новость ${title} успешно добавлена`)
        } catch (error) {
            return res.status(500).json({ error })
        }
    }
    const cretaeNews = (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.body;

        const author = new Author({
            _id: new mongoose.Types.ObjectId(),
            name
        });

        return author
            .save()
            .then((author) => res.status(201).json({ author }))
            .catch((error) => res.status(500).json({ error }))
    };

    const readNewsById = (req: Request, res: Response, next: NextFunction) => {
        const authorId = req.params.authorId;

        return Author.findById(authorId)
            .then((author) => {
                author ? res.status(200).json({ author }) : res.status(404).json({ message: 'NotFoound' })
            })
            .catch(error => res.status(500).json({ error }));
    };

    const readNews = (req: Request, res: Response, next: NextFunction) => {
        return Author.find()
            .then((authors) => res.status(200).json({ authors }))
            .catch(error => res.status(500).json({ error }));
    };

    const updateNews = (req: Request, res: Response, next: NextFunction) => {
        const authorId = req.params.authorId;

        return Author.findById(authorId)
            .then((author) => {
                if(author) {
                    author.set(req.body)

                    return author
                    .save()
                    .then((author) => res.status(201).json({ author }))
                    .catch((error) => res.status(500).json({ error }))
                } else {
                    res.status(404).json({ message: 'NotFoound' })
                }
            })
            .catch(error => res.status(500).json({ error }));
    };

    const deleteNews = (req: Request, res: Response, next: NextFunction) => {
        const authorId = req.params.authorId;

        return Author.findByIdAndDelete(authorId)
            .then((author) => (author ?
                res.status(201).json({ message: 'deleted' }) :
                res.status(404).json({ message: 'NotFound' })
            ))
            .catch((error) => res.status(500).json({ error }))
    };
}

export default new NewsController();