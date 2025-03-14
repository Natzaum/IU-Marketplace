import { Router, Request, Response} from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    await ProductController.registerProduct(req, res);
})

router.put("/:id", async (req: Request, res: Response) => {
    await ProductController.editProduct(req, res);
})

router.delete("/:id", async (req: Request, res: Response) => {
    await ProductController.deleteProduct(req, res);
})

router.get("/all", async (req: Request, res: Response) => {
    await ProductController.getAllProducts(req, res);
});

router.get("/:id", async (req: Request, res: Response) => {
    await ProductController.getProductById(req, res);
})

export default router;