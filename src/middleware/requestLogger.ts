import morgan  from "morgan";
import { logger } from "winston";

const stream ={
    write:(message:string)=>{
        logger.info(message.trim());
    };
}
    export const requestLogger= morgan(
        ":method :url :status :response-time ms",
        {stream}
    );
