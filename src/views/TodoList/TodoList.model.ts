import * as Schema from "effect/Schema";
import * as TodoItemModel from "../TodoItem/TodoItem.model.ts";

/**
 * Type for values required by the todo list view.
 */
export type TodoListModel = typeof TodoListModel.Type;
/**
 * Runtime schema for todo list view model values.
 */
export const TodoListModel = Schema.TaggedStruct("TodoListModel", {
  items: Schema.Array(TodoItemModel.TodoItemModel),
});
