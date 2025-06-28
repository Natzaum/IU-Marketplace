import { Router, Request, Response} from "express";
import { ProductController } from "../controllers/ProductController";
import { findProductMiddleware } from "../middlewares/productMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    await ProductController.registerProduct(req, res);
})

router.put("/:id", findProductMiddleware, async (req, res) => {
    await ProductController.editProduct(req, res);
})

router.delete("/:id", findProductMiddleware, async (req: Request, res: Response) => {
    await ProductController.deleteProduct(req, res);
})

router.get("/all", async (req: Request, res: Response) => {
    await ProductController.getAllProducts(req, res);
});

router.get("/mine", async (req: Request, res: Response) => {
  await ProductController.getMyProducts(req, res);
});

router.get("/:id", findProductMiddleware, async (req: Request, res: Response) => {
    await ProductController.getProductById(req, res);
})

export default router;