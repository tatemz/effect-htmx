import { TodoItemView } from "../TodoItem/TodoItem.view.tsx";
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
      <div
        class="card bg-base-100 border border-base-300 shadow-md rounded-xl"
        id={`todo-skeleton-${index}`}
      >
        <div class="card-body p-4 flex-row items-center gap-4">
          <div class="skeleton h-5 w-2/3" />
          <div class="ml-auto flex gap-3">
            <div class="skeleton h-10 w-20 rounded-btn" />
            <div class="skeleton h-10 w-24 rounded-btn" />
          </div>
        </div>
      </div>
    ))}
  </div>
);
