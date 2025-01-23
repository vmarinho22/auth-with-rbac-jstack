import express from "express";

import { makeSignUpController } from "../factories/makeSignUpController";
import { makeSignInController } from "../factories/makeSignInController";
import { routeAdapter } from "./adapters/routeAdapter";

const app = express();

app.use(express.json());

app.post("/sign-up", routeAdapter(makeSignUpController()));
app.post("/sign-in", routeAdapter(makeSignInController()));

app.listen(3001, () => {
  console.log("Server is running at http://localhnost:3001");
});
