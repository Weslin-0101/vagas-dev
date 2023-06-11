import express from "express";
import { PrismaClient } from "@prisma/client";
import { bodyParser, contentType, cors } from "./middlewares";
import userRoutes from "./rotues/user-routes";

const PORT = 3000;
const prisma = new PrismaClient();

const app = express();
app.use(cors);
app.use(bodyParser);
app.use(contentType);

app.use(userRoutes);

const server = app.listen(PORT, () => {
    prisma
        .$connect()
        .then(() => console.log(`Server running at http://localhost:${PORT}`))
});

process.on("SIGINT", async () => {
    try {
        await prisma.$disconnect();
        server.close();
        console.log(`Server closed with success`);
    } catch (error) {
        console.error("Error closing server: ", error)
    }
})