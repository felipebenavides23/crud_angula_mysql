"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamescontrol = void 0;
const datadabe_1 = __importDefault(require("../datadabe"));
class GmaesControl {
    gamesget(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            datadabe_1.default.query("select * from game", (err, rows) => {
                if (!err) {
                    res.json(rows);
                }
                else {
                    console.log(err);
                }
            });
        });
    }
    gameunico(req, res) {
        const id = req.params.id;
        datadabe_1.default.query("select * from game where id = ?", [id], (err, rows) => {
            if (!err) {
                res.json(rows);
            }
            else {
                console.log(err);
            }
        });
    }
    createGames(req, res) {
        const { titulo, descripcion, imagen } = req.body;
        datadabe_1.default.query("select * from game where title = ?", [titulo], (err, rows) => {
            if (!err && rows.length != 0) {
                res.json(rows);
            }
            else {
                datadabe_1.default.query("insert into game(title,descripcion,image) value (?,?,?)", [titulo, descripcion, imagen], (err) => {
                    if (!err) {
                        res.json({ mensaje: "se guaredo con exito" });
                    }
                    else {
                        console.log("error");
                    }
                });
            }
        });
    }
    deleteGames(req, res) {
        const { id } = req.params;
        datadabe_1.default.query("delete from game where id = ?", [id], (err) => {
            if (!err) {
                res.json({
                    mensaje: "todo correcto con la eliminacion",
                });
            }
            else {
                res.send(err);
            }
        });
    }
    updateGames(req, res) {
        const { titulo, descripcion, imagen } = req.body;
        const { id } = req.params;
        datadabe_1.default.query("UPDATE game SET title= ?, descripcion = ?, image = ? WHERE id = ?", [titulo, descripcion, imagen, id], (err) => {
            if (!err) {
                res.send("actualiza con exito");
            }
            else {
                res.send("error al atualizar");
            }
        });
    }
}
exports.gamescontrol = new GmaesControl();
