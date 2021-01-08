import { Response, Request, NextFunction, Router } from 'express';
import { User } from '../model/User';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  User.find({})
  .then((result: any) => {
    res.send(JSON.stringify(result));
  })
  .catch((err: any) => {
    console.log(err);
    res.status(400).send(err);
  })
});

router.get('/register', (req: Request, res: Response, next: NextFunction) => {
  User.create({
    id: "3",
    password: "3",
  })
  .then((result) => {
    console.log("dd");
    res.status(200).send(JSON.stringify(result));
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send(err);
  })
})

export default router;