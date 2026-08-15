import * as HttpApi from "effect/unstable/httpapi/HttpApi";
import { TodosApi } from "./TodosApi.ts";

export const Api = HttpApi.make("app").add(TodosApi);
