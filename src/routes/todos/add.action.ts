import * as Effect from "effect/Effect";
import * as Todo from "../../domain/Todo.ts";
import { buildMvcHtmlResponse } from "../../handler.ts";
import * as TodoItemFactory from "../../views/TodoItem/TodoItem.factory.ts";
import { TodoItemView } from "../../views/TodoItem/TodoItem.view.tsx";

/**
 * Creates a todo from form payload and returns the new todo card fragment.
 */
export const action = ({ payload }: { payload: { title: string } }) =>
  Effect.gen(function* () {
    const todo = yield* Todo.add(payload.title);
    const model = TodoItemFactory.toTodoItem(todo);
    return yield* buildMvcHtmlResponse({ model, View: TodoItemView });
  });
