import { Request, Response } from "express";
import pool from "../datadabe";
class IndexControl {
  public indexget(req: Request, res: Response) {
    pool.query("select * from game", (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  }
}

export const indexcontrol = new IndexControl();
