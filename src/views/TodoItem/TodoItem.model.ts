import * as Schema from "effect/Schema";

/**
 * Type for all values needed to render a todo item card.
 */
export type TodoItemModel = typeof TodoItemModel.Type;
/**
 * Runtime schema for todo item view model values.
 */
export const TodoItemModel = Schema.TaggedStruct("TodoItemModel", {
  id: Schema.String,
  title: Schema.String,
  completed: Schema.Boolean,
  doneUrl: Schema.String,
  undoUrl: Schema.String,
  deleteUrl: Schema.String,
  targetId: Schema.String,
  titleClass: Schema.String,
});
