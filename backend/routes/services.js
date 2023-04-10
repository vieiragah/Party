import serviceController, {
  findData,
} from "../controllers/serviceController.js";
import Service from '../models/Service.js'; 
import { Router } from "express";

const router = Router();

//const router = require("express").Router()

//const serviceController = require("../controllers/serviceController");

router
  .route("/services")
  .post(serviceController.create)
  .get(serviceController.getAll);

router
  .route("/services/:id")
  .get(serviceController.get)
  .delete(serviceController.delete)
  .put(serviceController.update);

router.post("/party", async (req, res) => {
  const partyByTitle = await Service.findOne({ name: req.body.name });
  return res.json(partyByTitle);
});

export default router;
