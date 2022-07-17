import { Router } from "express";
import { indexcontrol } from "../controllers/indexControl";

class IndexRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", indexcontrol.indexget);
  }
}

const indexRouter = new IndexRouter();
export default indexRouter.router;
