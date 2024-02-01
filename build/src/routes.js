"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./controller/user.controller");
var validateResource_1 = __importDefault(require("./middleware/validateResource"));
var user_schema_1 = require("./schema/user.schema");
function routes(app) {
    app.get("/healthcheck", function (req, res) { return res.sendStatus(200); });
    app.post("/api/users", (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
}
exports.default = routes;
