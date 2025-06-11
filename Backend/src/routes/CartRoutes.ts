import { Router, Request, Response} from "express";
import { CartController } from "../controllers/CartController";

const router = Router();

router.post("/add", async (req: Request, res: Response) => {
    await CartController.addToCart(req, res);
})

router.get("/all", async (req: Request, res: Response) => {
    await CartController.getAllFromCart(req, res);
})

router.get("/user/:userId", async (req: Request, res: Response) => {
    await CartController.getUserCart(req, res);
})

router.put("/:id", async (req: Request, res: Response) => {
    await CartController.editCart(req, res);
})

router.delete("/:id", async (req: Request, res: Response) => {
    await CartController.deleteFromCart(req, res);
})

export default router;