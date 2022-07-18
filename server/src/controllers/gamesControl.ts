import { Request, Response } from "express";
import pool from "../datadabe";

class GmaesControl {
  public async gamesget(req: Request, res: Response) {
    pool.query("select * from game", (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  }

  public gameunico(req: Request, res: Response) {
    const id = req.params.id;
    pool.query("select * from game where id = ?", [id], (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  }

  public createGames(req: Request, res: Response) {
    const { titulo, descripcion, imagen } = req.body;

    pool.query("select * from game where title = ?", [titulo], (err, rows) => {
      if (!err && rows.length != 0) {
        res.json(rows);
      } else {
        pool.query(
          "insert into game(title,descripcion,image) value (?,?,?)",
          [titulo, descripcion, imagen],
          (err) => {
            if (!err) {
              res.json({ mensaje: "se guaredo con exito" });
            } else {
              console.log("error");
            }
          }
        );
      }
    });
  }

  public deleteGames(req: Request, res: Response) {
    const { id } = req.params;

    pool.query("delete from game where id = ?", [id], (err) => {
      if (!err) {
        res.json({
          mensaje: "todo correcto con la eliminacion",
        });
      } else {
        res.send(err);
      }
    });
  }

  public updateGames(req: Request, res: Response) {
    const { titulo, descripcion, imagen } = req.body;
    const { id } = req.params;
    pool.query(
      "UPDATE game SET title= ?, descripcion = ?, image = ? WHERE id = ?",
      [titulo, descripcion, imagen, id],
      (err) => {
        if (!err) {
          res.json({
            mensaje: "se edito con exito",
          });
        } else {
          res.send("error al atualizar");
        }
      }
    );
  }
}

export const gamescontrol = new GmaesControl();
