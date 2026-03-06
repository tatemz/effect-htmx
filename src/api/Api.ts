import * as HttpApi from "@effect/platform/HttpApi";
import { TodosApi } from "./TodosApi.ts";

export class Api extends HttpApi.make("app").add(TodosApi) {}
