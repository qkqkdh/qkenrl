import { Response, Request, NextFunction, Router } from 'express';
import  UserModel from '../model/User';
import Pet from '../model/Pet';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { id, password } = req.body;
  const user = await UserModel.findOne({'username': id});
  if(user) { // 이미 존재시
    res.status(400).send();
  }
  else {
    const created = await UserModel.create({username: id, password: password});
    
    res.status(200).send(JSON.stringify(created));
  }
});

export default router;