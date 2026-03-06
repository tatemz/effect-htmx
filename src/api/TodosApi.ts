import * as HttpApiEndpoint from "@effect/platform/HttpApiEndpoint";
import * as HttpApiGroup from "@effect/platform/HttpApiGroup";
import * as HttpApiSchema from "@effect/platform/HttpApiSchema";
import * as Schema from "effect/Schema";

const todoId = HttpApiSchema.param("id", Schema.String);

const listTodos = HttpApiEndpoint.get("listTodos", "/").addSuccess(
  HttpApiSchema.Text({ contentType: "text/html" }),
);

const listTodoItems = HttpApiEndpoint.get(
  "listTodoItems",
  "/todos/list",
).addSuccess(HttpApiSchema.Text({ contentType: "text/html" }));

const addTodo = HttpApiEndpoint.post("addTodo", "/todos")
  .setPayload(
    Schema.Struct({ title: Schema.String }).pipe(
      HttpApiSchema.withEncoding({ kind: "UrlParams" }),
    ),
  )
  .addSuccess(HttpApiSchema.Text({ contentType: "text/html" }));

const doneTodo = HttpApiEndpoint.post(
  "doneTodo",
)`/todos/${todoId}/done`.addSuccess(
  HttpApiSchema.Text({ contentType: "text/html" }),
);

const undoTodo = HttpApiEndpoint.post(
  "undoTodo",
)`/todos/${todoId}/undo`.addSuccess(
  HttpApiSchema.Text({ contentType: "text/html" }),
);

const deleteTodo = HttpApiEndpoint.post(
  "deleteTodo",
)`/todos/${todoId}/delete`.addSuccess(
  HttpApiSchema.Text({ contentType: "text/html" }),
);

export class TodosApi extends HttpApiGroup.make("todos", { topLevel: true })
  .add(listTodos)
  .add(listTodoItems)
  .add(addTodo)
  .add(doneTodo)
  .add(undoTodo)
  .add(deleteTodo) {}
