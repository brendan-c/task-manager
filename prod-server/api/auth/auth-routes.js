"use strict";

var _interopRequireWildcard = require("/Users/b/Code/MEVN-Stack/task-manager/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/b/Code/MEVN-Stack/task-manager/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./auth-controller"));

var router = _express.default.Router();

router.post("/auth", controller.index);
var _default = router;
exports.default = _default;