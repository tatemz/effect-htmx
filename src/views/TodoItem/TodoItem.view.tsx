import type { ViewProps } from "../ViewProps.ts";
import type * as TodoItemModel from "./TodoItem.model.ts";

/**
 * Renders a non-interactive skeleton placeholder for a todo card.
 */
export const TodoItemSkeletonView = ({
  wrapperClass = "",
  id,
}: {
  wrapperClass?: string;
  id?: string;
}) => (
  <div
    class={`card bg-base-100 border border-base-300 shadow-md rounded-xl ${wrapperClass}`}
    id={id}
  >
    <div class="card-body p-4 flex-row items-center gap-4">
      <div class="skeleton h-5 w-2/3" />
      <div class="ml-auto flex gap-3">
        <div class="skeleton h-10 w-20 rounded-btn" />
        <div class="skeleton h-10 w-24 rounded-btn" />
      </div>
    </div>
  </div>
);

/**
 * Renders a single interactive todo card with HTMX actions.
 */
export const TodoItemView = ({
  model,
}: ViewProps<TodoItemModel.TodoItemModel>) => (
  <div
    class="card bg-base-100 border border-base-300 shadow-md rounded-xl transition-all duration-200 hover:shadow-lg"
    id={model.targetId}
  >
    <div class="card-body p-4 flex-row items-center gap-4">
      <p class={`flex-1 text-sm font-medium ${model.titleClass}`}>
        {model.title}
      </p>
      <div class="card-actions flex-nowrap">
        {model.completed ? (
          <button
            type="button"
            class="btn btn-sm btn-ghost"
            hx-post={model.undoUrl}
            hx-target={`#${model.targetId}`}
            hx-swap="outerHTML"
            hx-disabled-elt="this"
          >
            Undo
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-sm btn-success"
            hx-post={model.doneUrl}
            hx-target={`#${model.targetId}`}
            hx-swap="outerHTML"
            hx-disabled-elt="this"
          >
            Done
          </button>
        )}
        <button
          type="button"
          class="btn btn-sm btn-error"
          hx-post={model.deleteUrl}
          hx-target={`#${model.targetId}`}
          hx-swap="delete swap:200ms"
          hx-indicator={`#${model.targetId}`}
          hx-disabled-elt="this"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);
