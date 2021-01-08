import { Response, Request, NextFunction, Router } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({"success":"success"});
});

export default router;