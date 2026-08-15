import * as Schema from "effect/Schema";
import * as HttpApiEndpoint from "effect/unstable/httpapi/HttpApiEndpoint";
import * as HttpApiGroup from "effect/unstable/httpapi/HttpApiGroup";
import * as HttpApiSchema from "effect/unstable/httpapi/HttpApiSchema";

const Html = Schema.String.pipe(
  HttpApiSchema.asText({ contentType: "text/html" }),
);

const todoParams = { id: Schema.String };

const listTodos = HttpApiEndpoint.get("listTodos", "/", {
  success: Html,
});

const listTodoItems = HttpApiEndpoint.get("listTodoItems", "/todos/list", {
  success: Html,
});

const addTodo = HttpApiEndpoint.post("addTodo", "/todos", {
  payload: Schema.Struct({ title: Schema.String }).pipe(
    HttpApiSchema.asFormUrlEncoded(),
  ),
  success: Html,
});

const doneTodo = HttpApiEndpoint.post("doneTodo", "/todos/:id/done", {
  params: todoParams,
  success: Html,
});

const undoTodo = HttpApiEndpoint.post("undoTodo", "/todos/:id/undo", {
  params: todoParams,
  success: Html,
});

const deleteTodo = HttpApiEndpoint.post("deleteTodo", "/todos/:id/delete", {
  params: todoParams,
  success: HttpApiSchema.Empty(204),
});

export const TodosApi = HttpApiGroup.make("todos", { topLevel: true })
  .add(listTodos)
  .add(listTodoItems)
  .add(addTodo)
  .add(doneTodo)
  .add(undoTodo)
  .add(deleteTodo);
