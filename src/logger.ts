import { createLogger, format, transports } from "winston";

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/info.log", level: "info" }),
    new transports.File({ filename: "logs/warn.log", level: "warn" }),
    new transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

export default logger;
