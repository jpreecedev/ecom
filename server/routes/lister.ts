import { Router, Response, Request } from 'express';
import listerData from '../data/lister';

const router: Router = Router();

router.get('/:category/:subCategory', (request: Request, response: Response) => {
  response.send(listerData);
});

export { router as listerRouter }
