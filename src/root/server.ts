import express from "express";
import { router } from "../routes/route.js";
import { errorMiddleware } from "./utils/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(errorMiddleware);

export { app };
