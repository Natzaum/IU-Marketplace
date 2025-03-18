import express, {urlencoded} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import "reflect-metadata";
import { AppDataSource } from "./config/database";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Express server is running");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log("Database Connected");

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    })
    .catch((error) => console.log("Error occurred: ", error));
