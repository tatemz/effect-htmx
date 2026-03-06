import * as Schema from "effect/Schema";
import * as LayoutModel from "../Layout/Layout.model.ts";
import * as TodoListModel from "../TodoList/TodoList.model.ts";

/**
 * Type for values needed to render the todos page.
 */
export type TodoPageModel = typeof TodoPageModel.Type;
/**
 * Runtime schema for todos page view model values.
 */
export const TodoPageModel = Schema.TaggedStruct("TodoPageModel", {
  layout: LayoutModel.LayoutModel,
  heading: Schema.String,
  listLoadUrl: Schema.String,
  addActionUrl: Schema.String,
  addPlaceholder: Schema.String,
  addButtonLabel: Schema.String,
  todoList: TodoListModel.TodoListModel,
});
