"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexcontrol = void 0;
const datadabe_1 = __importDefault(require("../datadabe"));
class IndexControl {
    indexget(req, res) {
        datadabe_1.default.query("select * from game", (err, rows) => {
            if (!err) {
                res.json(rows);
            }
            else {
                console.log(err);
            }
        });
    }
}
exports.indexcontrol = new IndexControl();
