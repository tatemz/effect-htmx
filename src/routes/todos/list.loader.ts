import * as Effect from "effect/Effect";
import { buildMvcHtmlResponse } from "../../handler.ts";
import * as TodoPageFactory from "../../views/TodoPage/TodoPage.factory.ts";
import { TodoPageView } from "../../views/TodoPage/TodoPage.view.tsx";

/**
 * Renders the initial todos page shell with lazy-loaded list content.
 */
export const loader = () =>
  Effect.gen(function* () {
    const model = TodoPageFactory.toTodoPage([]);
    return yield* buildMvcHtmlResponse({ model, View: TodoPageView });
  });
