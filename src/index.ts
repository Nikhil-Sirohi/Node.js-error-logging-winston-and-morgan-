import express, { Request, Response } from "express";
import { CustomError } from "./errors";
import { errorHandler } from "./middleware/errorHandler";
import logger from "./logger";
import { requestLogger } from "./middleware/requestLogger";
const app = express();
app.use(express.json());
app.use(requestLogger);

app.get("/", (req: Request, res: Response) => {
  logger.info("Home route accessed");
  res.send("Hello world");
});

app.get("/error", (req: Request, res: Response) => {
  logger.warn("Triggering a warning");
  throw new CustomError(400, "Bad Request Example");
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on Port: ${PORT}`);
});
