import { Response, Request, NextFunction } from "express";
import logger from "../logger";
import { CustomError } from "../errors";

export const erroHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    logger.error(`Srarus: ${err.status}, Message: ${err.message}`);
    return res.status(err.status).json({ error: err.message });
  }

  logger.error(`Unhandled error: ${err.stack}`);
  res.status(500).json({ error: "Internal Server error" });
};
