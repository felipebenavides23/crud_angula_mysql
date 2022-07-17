"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gamesControl_1 = require("./../controllers/gamesControl");
const express_1 = require("express");
class GamesRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", gamesControl_1.gamescontrol.gamesget);
        this.router.get("/:id", gamesControl_1.gamescontrol.gameunico);
        this.router.post("/", gamesControl_1.gamescontrol.createGames);
        this.router.delete("/:id", gamesControl_1.gamescontrol.deleteGames);
        this.router.put("/:id", gamesControl_1.gamescontrol.updateGames);
    }
}
const gamesRouter = new GamesRouter();
exports.default = gamesRouter.router;
