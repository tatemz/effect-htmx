import * as KeyValueStore from "@effect/platform/KeyValueStore";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";

const SIMULATED_LATENCY = Duration.seconds(1);

/**
 * Domain entity representing a single todo item.
 */
export class Todo extends Schema.Class<Todo>("Todo")({
  id: Schema.String,
  title: Schema.String,
  completed: Schema.Boolean,
}) {}

const KEY = "todos";

const { tag: TodoStore, layer: TodoStoreLayer } = KeyValueStore.layerSchema(
  Schema.Array(Todo),
  "TodoStore",
);

/**
 * In-memory key-value store layer used by todo domain effects.
 */
export { TodoStoreLayer };

/**
 * Lists all todos from the store with simulated latency.
 */
export const list = Effect.gen(function* () {
  yield* Effect.sleep(SIMULATED_LATENCY);
  const store = yield* TodoStore;
  const result = yield* store.get(KEY);
  return Option.getOrElse(result, (): Array<Todo> => []);
});

/**
 * Creates and persists a new todo with the provided title.
 */
export const add = (title: string) =>
  Effect.gen(function* () {
    yield* Effect.sleep(SIMULATED_LATENCY);
    const store = yield* TodoStore;
    const todos = yield* list;
    const todo = new Todo({
      id: crypto.randomUUID(),
      title,
      completed: false,
    });
    yield* store.set(KEY, [...todos, todo]);
    return todo;
  });

/**
 * Toggles completion state for a todo by id and returns updated item.
 */
export const toggle = (id: string) =>
  Effect.gen(function* () {
    yield* Effect.sleep(SIMULATED_LATENCY);
    const store = yield* TodoStore;
    const todos = yield* list;
    const updated = todos.map((t) =>
      t.id === id ? new Todo({ ...t, completed: !t.completed }) : t,
    );
    yield* store.set(KEY, updated);
    return updated.find((t) => t.id === id);
  });

/**
 * Removes a todo by id from the store.
 */
export const remove = (id: string) =>
  Effect.gen(function* () {
    const store = yield* TodoStore;
    const todos = yield* list;
    yield* store.set(
      KEY,
      todos.filter((t) => t.id !== id),
    );
  });
