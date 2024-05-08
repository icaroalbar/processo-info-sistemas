import express, { Express } from "express";
import routes from "./routers/routes";

export const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
