import { LayoutView } from "../Layout/Layout.view.tsx";
import { TodoListSkeletonView } from "../TodoList/TodoList.view.tsx";
import type { ViewProps } from "../ViewProps.ts";
import type * as TodoPageModel from "./TodoPage.model.ts";

/**
 * Renders the todos page shell, add form, and lazy-loading list container.
 */
export const TodoPageView = ({
  model,
}: ViewProps<TodoPageModel.TodoPageModel>) => (
  <LayoutView model={model.layout}>
    <div class="w-full max-w-xl p-4">
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl font-bold text-center">{model.heading}</h1>

        <section class="card bg-base-100 shadow-xl rounded-2xl">
          <div class="card-body">
            <form
              class="flex gap-2"
              hx-post={model.addActionUrl}
              hx-target="#todo-list .todo-list-items"
              hx-swap="beforeend"
              hx-disabled-elt="find button[type='submit']"
              hx-on--after-request="this.reset(); window.removePendingTodoSkeleton()"
              hx-on--before-request="window.appendTodoSkeleton(event)"
            >
              <input
                type="text"
                name="title"
                placeholder={model.addPlaceholder}
                class="input input-bordered flex-1"
                required
              />
              <button type="submit" class="btn btn-primary">
                {model.addButtonLabel}
              </button>
            </form>
          </div>
        </section>

        <section>
          <div
            id="todo-list"
            hx-get={model.listLoadUrl}
            hx-trigger="load"
            hx-swap="innerHTML"
          >
            <TodoListSkeletonView />
          </div>
        </section>
      </div>
    </div>
  </LayoutView>
);
