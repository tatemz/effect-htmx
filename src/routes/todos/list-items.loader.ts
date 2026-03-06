import * as Effect from "effect/Effect";
import * as Todo from "../../domain/Todo.ts";
import { buildMvcHtmlResponse } from "../../handler.ts";
import * as TodoListFactory from "../../views/TodoList/TodoList.factory.ts";
import { TodoListView } from "../../views/TodoList/TodoList.view.tsx";

/**
 * Loads todos and returns only the todo list fragment for HTMX replacement.
 */
export const loader = () =>
  Effect.gen(function* () {
    const todos = yield* Todo.list;
    const model = TodoListFactory.toTodoList(todos);
    return yield* buildMvcHtmlResponse({ model, View: TodoListView });
  });
