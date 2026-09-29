import { div } from "@thi.ng/hiccup-html";
import {
  TodoItemSkeletonView,
  TodoItemView,
} from "../TodoItem/TodoItem.view.ts";
import type { ViewProps } from "../ViewProps.ts";
import type * as TodoListModel from "./TodoList.model.ts";

/**
 * Renders the collection of todo item cards.
 */
export const TodoListView = ({
  model,
}: ViewProps<TodoListModel.TodoListModel>) =>
  div(
    ".todo-list",
    model.items.map((item) => TodoItemView({ model: item })),
  );

/**
 * Renders placeholder todo cards while data is loading.
 */
export const TodoListSkeletonView = ({ count = 3 }: { count?: number }) =>
  div(
    ".todo-list",
    Array.from({ length: count }, (_, index) =>
      TodoItemSkeletonView({ id: `todo-skeleton-${index}` }),
    ),
  );
