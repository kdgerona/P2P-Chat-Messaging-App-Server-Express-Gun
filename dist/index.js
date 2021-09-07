"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var gun_1 = __importDefault(require("gun"));
var _a = process.env.PORT, PORT = _a === void 0 ? '8000' : _a;
var app = (0, express_1.default)();
//@ts-ignore
app.use(gun_1.default.serve);
var server = app.listen(+PORT, function () {
    console.log("Gun Server listening at port " + PORT);
});
(0, gun_1.default)({ web: server, file: 'local_data' });
