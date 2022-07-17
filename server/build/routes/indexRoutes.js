"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControl_1 = require("../controllers/indexControl");
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", indexControl_1.indexcontrol.indexget);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
