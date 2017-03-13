import { Router, Response, Request } from 'express';
import megamenuData from '../data/megamenu';

const router: Router = Router();

router.get('/', (request: Request, response: Response) => {
  response.send(megamenuData);
});

export { router as megamenuRouter }
