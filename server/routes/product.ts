import { Router, Response, Request } from 'express';
import productDetail from '../data/product-detail';

const router: Router = Router();

router.get('/:id/:description', (request: Request, response: Response) => {
  response.send(productDetail);
});

export { router as productRouter }
