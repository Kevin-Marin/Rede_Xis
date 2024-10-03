import { Router } from "express";
import { signup, login } from "../controllers/user-controller.js";
import authorizer from "../middlewares/authorizer.js";
import authenticator from "../middlewares/authenticator.js"

const router = Router();

router.post("/login", login)
router.post("/signup", signup);

router.use(authenticator)
router.use(authorizer("ADMINISTRADOR"))

// crud user

export default router;