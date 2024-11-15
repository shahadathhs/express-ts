import express, { Request, Response } from "express";

// ** declare router **
const appRouter = express.Router();

// ** routes **
appRouter.get("/api/v1", (req: Request, res: Response) => {
  res.send("Main API");
});


// ** export router **
export default appRouter;
