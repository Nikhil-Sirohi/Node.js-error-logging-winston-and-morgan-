import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import logger from "../logger";
import { CustomError } from "../errors";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    logger.error(`Status: ${err.status}, Message: ${err.message}`);
    res.status(err.status).json({ error: err.message });
  } else {
    logger.error(`Unhandled error: ${err.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};
