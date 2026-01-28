import express from 'express';
import path from 'node:path';
import { createBook, deleteBook, getSingleBook, listBooks, updateBook } from './bookController';
import multer from 'multer';
import authenticate from '../middleware/authenticate';


const bookRouter = express.Router();

//? Multer setups
const upload = multer({
    dest: path.resolve(__dirname,'../../public/data/uploads'),
    limits: {fileSize: 3e7}
});

//? Books Routes

bookRouter.post("/",authenticate, upload.fields([
    {name: 'coverImage', maxCount:1},
    {name: 'file', maxCount:1}
]), createBook);

bookRouter.patch('/:bookId',authenticate,upload.fields([
    {name: 'coverImage', maxCount:1},
    {name: 'file', maxCount:1}]), updateBook);

bookRouter.get('/',listBooks);

bookRouter.get('/:bookId', getSingleBook);

bookRouter.delete('/:bookId', deleteBook);
export default bookRouter;