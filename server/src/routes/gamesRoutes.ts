import { gamescontrol } from "./../controllers/gamesControl";
import { Router } from "express";

class GamesRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", gamescontrol.gamesget);
    this.router.get("/:id", gamescontrol.gameunico);
    this.router.post("/", gamescontrol.createGames);
    this.router.delete("/:id", gamescontrol.deleteGames);
    this.router.put("/:id", gamescontrol.updateGames);
  }
}

const gamesRouter = new GamesRouter();
export default gamesRouter.router;
