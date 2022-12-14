import { Router } from "express";
import { checkSchema } from "express-validator";
import {
    validatePlayerSummoner,
    validatePlayerSchema,
    validateAlreadyRegistered,
    checkValidateResult,
} from "../middlewares/validation/validatePlayer";
import * as playerController from "../controllers/playerController";

const router = Router();
router.get("/", playerController.get);
router.post(
    "/",
    validateAlreadyRegistered,
    checkSchema(validatePlayerSchema),
    checkValidateResult,
    playerController.post
);
router.put("/", validatePlayerSummoner, checkSchema(validatePlayerSchema), checkValidateResult, playerController.put);
router.delete("/", validatePlayerSummoner, playerController.destroy);

module.exports = router;
