import { HttpServerResponse } from "@effect/platform";
import * as Effect from "effect/Effect";
import * as Todo from "../../domain/Todo.ts";

/**
 * Deletes a todo and returns an empty 204 response for HTMX swap-delete.
 */
export const action = ({ path }: { path: { id: string } }) =>
  Effect.gen(function* () {
    yield* Todo.remove(path.id);
    return HttpServerResponse.empty({ status: 204 });
  });
