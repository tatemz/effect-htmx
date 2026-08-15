import * as Effect from "effect/Effect";
import * as HttpServerResponse from "effect/unstable/http/HttpServerResponse";
import * as Todo from "../../domain/Todo.ts";

/**
 * Deletes a todo and returns an empty 204 response for HTMX swap-delete.
 */
export const action = ({ params }: { params: { id: string } }) =>
  Effect.gen(function* () {
    yield* Todo.remove(params.id);
    return HttpServerResponse.empty({ status: 204 });
  });
