import * as Effect from "effect/Effect";
import * as HttpServerResponse from "effect/unstable/http/HttpServerResponse";
import * as Todo from "../../domain/Todo.ts";
import { buildMvcHtmlResponse } from "../../handler.ts";
import * as TodoItemFactory from "../../views/TodoItem/TodoItem.factory.ts";
import { TodoItemView } from "../../views/TodoItem/TodoItem.view.tsx";

/**
 * Marks a todo as done and returns the updated todo card fragment.
 */
export const action = ({ params }: { params: { id: string } }) =>
  Effect.gen(function* () {
    const todo = yield* Todo.toggle(params.id);
    if (!todo) {
      return HttpServerResponse.empty({ status: 404 });
    }
    const model = TodoItemFactory.toTodoItem(todo);
    return yield* buildMvcHtmlResponse({ model, View: TodoItemView });
  });
