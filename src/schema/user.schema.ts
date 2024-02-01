import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required.",
    }).email("Invalid Email."),
    password: string({
      required_error: "Password is required.",
    }).min(6, "Password is too short."),
    passwordConfirmation: string({
      required_error: "Password Confirmation is required.",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match.",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
