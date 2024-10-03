import { Router } from "express";
import { signup, login, index, show, store, update, destroy } from "../controllers/user-controller.js";
import authorizer from "../middlewares/authorizer.js";
import authenticator from "../middlewares/authenticator.js"

const router = Router();

router.post("/login", login)
router.post("/signup", signup);

router.use(authenticator)
router.use(authorizer("ADMINISTRADOR"))

router.use(authenticator)
router.use(authorizer(["ADMINISTRATOR", "SUPORTE"]))
router.get("/", index)
router.get("/:id", show)
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;