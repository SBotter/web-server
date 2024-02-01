"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("config"));
var logger_1 = __importDefault(require("../utils/logger"));
function connect() {
    var dbUri = config_1.default.get("dbUri");
    console.log(dbUri);
    return mongoose_1.default
        .connect(dbUri)
        .then(function () {
        logger_1.default.info("Connected to DB!");
    })
        .catch(function (e) {
        logger_1.default.error(e.message, "BD Connect ERROR!");
        process.exit(1);
    });
}
exports.default = connect;
