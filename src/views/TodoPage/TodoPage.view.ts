import { button, div, form, h1, inputText, section } from "@thi.ng/hiccup-html";
import { LayoutView } from "../Layout/Layout.view.ts";
import { TodoItemSkeletonView } from "../TodoItem/TodoItem.view.ts";
import { TodoListSkeletonView } from "../TodoList/TodoList.view.ts";
import type { ViewProps } from "../ViewProps.ts";
import type * as TodoPageModel from "./TodoPage.model.ts";

/**
 * Renders the todos page shell, add form, and lazy-loading list container.
 */
export const TodoPageView = ({
  model,
}: ViewProps<TodoPageModel.TodoPageModel>) =>
  LayoutView({
    model: model.layout,
    children: [
      div(
        ".todo-stack",
        h1(null, model.heading),

        section(
          ".todo-card",
          form(
            {
              class: "todo-form",
              "hx-post": model.addActionUrl,
              "hx-target": "#todo-list .todo-list",
              "hx-swap": "beforeend",
              "hx-indicator": "#todo-add-pending-skeleton",
              "hx-disable": "find button[type='submit']",
            },
            inputText({
              name: "title",
              placeholder: model.addPlaceholder,
              class: "todo-input",
              required: true,
            }),
            button(
              { type: "submit", class: "todo-btn todo-btn-primary" },
              model.addButtonLabel,
            ),
          ),
        ),

        section(
          null,
          div(
            {
              id: "todo-list",
              "hx-get": model.listLoadUrl,
              "hx-trigger": "load",
              "hx-swap": "innerHTML",
            },
            TodoListSkeletonView({}),
          ),
          div(
            ".todo-list",
            TodoItemSkeletonView({
              id: "todo-add-pending-skeleton",
              wrapperClass: "htmx-indicator",
            }),
          ),
        ),
      ),
    ],
  });
