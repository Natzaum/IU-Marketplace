import { Router, Request, Response} from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    await ProductController.registerProduct(req, res);
})

router.put("/:id", async (req: Request, res: Response) => {
    await ProductController.editProduct(req, res);
})

export default router;