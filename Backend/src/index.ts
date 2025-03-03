import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from "./config/database";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Express server is running");
    })

AppDataSource.initialize()
    .then(() => {
        console.log("Database Connected");

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    })
    .catch((error) => console.log("Error occured: ", error));