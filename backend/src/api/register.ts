import { Response, Request, NextFunction, Router } from 'express';
import { User } from '../model/User';
const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { id, password } = req.body;
  const user = await User.findOne({'username': id});
  if(user) { // 이미 존재시
    res.status(400).send();
  }
  else {
    const created = await User.create({username: id, password: password});
    res.status(200).send(JSON.stringify(created));
  }
});

export default router;