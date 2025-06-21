import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    await UserController.register(req, res);
});

router.post("/login", async (req: Request, res: Response) => {
    await UserController.login(req, res);
})

router.get("/profile", authMiddleware, (req, res) => {
  UserController.profile(req, res);
});

export default router;
