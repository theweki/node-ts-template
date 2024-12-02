import express, { Request, Response, NextFunction } from "express";
import { router } from "../routes/route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.error({ name: err.name, message: err.message });
  res.status(500).send("Internal Server Error");
  next();
});

export { app };
router
