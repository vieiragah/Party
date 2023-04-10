import partyController from "../controllers/partyController.js";
import { Router } from "express";
const router = Router();

router
  .route("/parties")
  .post(partyController.create)
  .get(partyController.getAll);

router
  .route("/parties/:id")
  .get(partyController.get)
  .delete(partyController.delete)
  .put(partyController.update);


export default router;
