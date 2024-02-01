"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
var zod_1 = require("zod");
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: test@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
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
