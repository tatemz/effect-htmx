import { HttpServerResponse } from "@effect/platform";
import * as HttpApiBuilder from "@effect/platform/HttpApiBuilder";
import * as Effect from "effect/Effect";
import * as Fn from "effect/Function";
import { Api } from "../api/Api.ts";
import {
  addAction,
  doneAction,
  listItemsLoader,
  listLoader,
  removeAction,
  undoAction,
} from "../routes/todos/index.ts";

const handle500s = Effect.catchAll(() =>
  HttpServerResponse.empty({ status: 500 }),
);

export const TodosHandlerLive = HttpApiBuilder.group(Api, "todos", (handlers) =>
  handlers
    .handle("listTodos", Fn.flow(listLoader, handle500s))
    .handle("listTodoItems", Fn.flow(listItemsLoader, handle500s))
    .handle("addTodo", Fn.flow(addAction, handle500s))
    .handle("doneTodo", Fn.flow(doneAction, handle500s))
    .handle("undoTodo", Fn.flow(undoAction, handle500s))
    .handle("deleteTodo", Fn.flow(removeAction, handle500s)),
);
