import {
  TodoItemSkeletonView,
  TodoItemView,
} from "../TodoItem/TodoItem.view.tsx";
import type { ViewProps } from "../ViewProps.ts";
import type * as TodoListModel from "./TodoList.model.ts";

/**
 * Renders the collection of todo item cards.
 */
export const TodoListView = ({
  model,
}: ViewProps<TodoListModel.TodoListModel>) => (
  <div class="todo-list-items flex flex-col gap-3">
    {model.items.map((item) => (
      <TodoItemView model={item} />
    ))}
  </div>
);

/**
 * Renders placeholder todo cards while data is loading.
 */
export const TodoListSkeletonView = ({ count = 3 }: { count?: number }) => (
  <div class="todo-list-items flex flex-col gap-3">
    {Array.from({ length: count }, (_, index) => (
      <TodoItemSkeletonView id={`todo-skeleton-${index}`} />
    ))}
  </div>
);
