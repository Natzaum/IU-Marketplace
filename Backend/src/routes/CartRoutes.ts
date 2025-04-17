import { Router, Request, Response} from "express";
import { CartController } from "../controllers/CartController";

const router = Router();

router.post("/add", async (req: Request, res: Response) => {
    await CartController.addToCart(req, res);
})

router.get("/all", async (req: Request, res: Response) => {
    await CartController.getAllFromCart(req, res);
})

router.put("/:id", async (req: Request, res: Response) => {
    await CartController.editCart(req, res);
})

export default router;