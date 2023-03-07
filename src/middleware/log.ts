import { NextFunction, Request,Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Comenzando log middleware...");
  next();
  console.log("Finalizando log middleware...");
};
const otroMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Comenzando log middleware...2");
    next();
    console.log("Finalizando log middleware...2");
  };
export { logMiddleware,otroMiddleware };
