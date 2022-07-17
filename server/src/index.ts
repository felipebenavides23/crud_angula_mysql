import express, { Application } from "express";
import morgan from "Morgan";
import cors from "cors";

import indexRoutes from "./routes/indexRoutes";
import gamesRoutes from "./routes/gamesRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.router();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
  }

  router(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/games", gamesRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        `el servidor se deplego en el puerto http://localhots:${this.app.get(
          "port"
        )}`
      );
    });
  }
}

const server = new Server();

server.start();
