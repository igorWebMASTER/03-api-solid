import { register } from "../http/controllers/register";
import { app } from "../app";

app.post('/users', register)