import { Router } from "express";
import user from "./user";
import place from './place';
import search from './search';

const router = Router();

router.use("/user", user);
router.use("/place", place);
router.use("/search", search);
export default router;
