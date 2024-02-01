"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
var zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "Email is required.",
        }).email("Invalid Email."),
        password: (0, zod_1.string)({
            required_error: "Password is required.",
        }).min(6, "Password is too short."),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "Password Confirmation is required.",
        }),
    }).refine(function (data) { return data.password === data.passwordConfirmation; }, {
        message: "Passwords do not match.",
        path: ["passwordConfirmation"],
    }),
});
