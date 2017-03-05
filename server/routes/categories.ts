import { Router, Response, Request } from 'express';
import categories from '../data/categories';

const router: Router = Router();

router.get('/', (request: Request, response: Response) => {
    response.send(categories);
});

export { router as categoriesRouter }
