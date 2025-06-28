import { Router, Request, Response} from "express";
import { CartController } from "../controllers/CartController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/add", authMiddleware, async (req: Request, res: Response) => {
    await CartController.addToCart(req, res);
})

router.get("/all", authMiddleware, async (req: Request, res: Response) => {
    await CartController.getAllFromCart(req, res);
})

router.get("/user/:userId", authMiddleware, async (req: Request, res: Response) => {
    await CartController.getUserCart(req, res);
})

router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
    await CartController.editCart(req, res);
})

router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
    await CartController.deleteFromCart(req, res);
})

export default router;