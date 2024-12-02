import { PORT } from "../configs/env.js";
import { connectDB } from "./db.js";
import { app } from "./server.js";

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`server started { port: ${PORT} }`);
  });
};

const root = async () => connectDB().then(startServer).catch(console.error);

export { root };
