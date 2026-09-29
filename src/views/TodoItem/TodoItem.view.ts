import { button, div, para } from "@thi.ng/hiccup-html";
import type { ViewProps } from "../ViewProps.ts";
import type * as TodoItemModel from "./TodoItem.model.ts";

/**
 * Non-interactive action button placeholders used by the skeleton card.
 */
const skeletonActions = () =>
  div(
    { class: "todo-actions" },
    div({ class: "skeleton", style: { height: "2.25rem", width: "4.5rem" } }),
    div({ class: "skeleton", style: { height: "2.25rem", width: "5.5rem" } }),
  );

/**
 * Renders a non-interactive skeleton placeholder for a todo card.
 */
export const TodoItemSkeletonView = ({
  wrapperClass = "",
  id,
}: {
  wrapperClass?: string;
  id?: string;
}) =>
  div(
    ".todo-card",
    { id, class: wrapperClass },
    div(
      ".todo-card-row",
      div({
        class: "skeleton",
        style: { height: "1.25rem", width: "66%" },
      }),
      skeletonActions(),
    ),
  );

/**
 * Renders a single interactive todo card with HTMX actions.
 */
export const TodoItemView = ({
  model,
}: ViewProps<TodoItemModel.TodoItemModel>) =>
  div(
    ".todo-card",
    { id: model.targetId },
    div(
      ".todo-card-row",
      para(
        {
          class: {
            "todo-title": true,
            "is-completed": model.completed,
          },
        },
        model.title,
      ),
      div(
        ".todo-actions",
        model.completed
          ? button(
              {
                type: "button",
                class: "todo-btn todo-btn-ghost",
                "hx-post": model.undoUrl,
                "hx-target": `#${model.targetId}`,
                "hx-swap": "outerHTML",
                "hx-disable": "this",
              },
              "Undo",
            )
          : button(
              {
                type: "button",
                class: "todo-btn todo-btn-success",
                "hx-post": model.doneUrl,
                "hx-target": `#${model.targetId}`,
                "hx-swap": "outerHTML",
                "hx-disable": "this",
              },
              "Done",
            ),
        button(
          {
            type: "button",
            class: "todo-btn todo-btn-error",
            "hx-post": model.deleteUrl,
            "hx-target": `#${model.targetId}`,
            "hx-swap": "delete swap:200ms",
            "hx-indicator": `#${model.targetId}`,
            "hx-disable": "this",
          },
          "Delete",
        ),
      ),
    ),
  );
