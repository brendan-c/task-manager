import express from "express";

import { registerRoutes } from "./routes";
import { setEnvironment } from "./config/env";

const app = express();
const port = 3000;

setEnvironment(app);
registerRoutes(app);

app.get("/", (req, res) => {
  if (process.env.NODE_ENV !== "production") {
    return res.send("running server in development mode");
  } else {
    return res.sendFile("index.html", { root: __dirname + "/../dist/" });
  }
});

app.listen(port, () =>
  console.log(`listening on port ${port} in ${process.env.NODE_ENV} mode!`)
);
