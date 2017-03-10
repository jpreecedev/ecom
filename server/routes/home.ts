import { Router, Response, Request } from 'express';
import homeData from '../data/home';

const router: Router = Router();

router.get('/', (request: Request, response: Response) => {
  response.send(homeData);
});

export { router as homeRouter }
