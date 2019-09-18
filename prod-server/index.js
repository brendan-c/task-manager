"use strict";

var _interopRequireDefault = require("/Users/b/Code/MEVN-Stack/task-manager/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

var app = (0, _express.default)();
var port = 3000;
(0, _env.setEnvironment)(app);
(0, _routes.registerRoutes)(app);
app.get("/", function (req, res) {
  if (process.env.NODE_ENV !== "production") {
    return res.send("running server in development mode");
  } else {
    return res.sendFile("index.html", {
      root: __dirname + "/../dist/"
    });
  }
});
app.listen(port, function () {
  return console.log("listening on port ".concat(port, " in ").concat(process.env.NODE_ENV, " mode!"));
});