import type { Todo } from "../../domain/Todo.ts";
import * as LayoutFactory from "../Layout/Layout.factory.ts";
import * as TodoListFactory from "../TodoList/TodoList.factory.ts";
import * as TodoPageModel from "./TodoPage.model.ts";

/**
 * Builds the complete todos page view model from domain todos.
 */
export const toTodoPage = (
  todos: ReadonlyArray<Todo>,
): TodoPageModel.TodoPageModel =>
  TodoPageModel.TodoPageModel.make({
    layout: LayoutFactory.toLayout({ title: "Todos" }),
    heading: "Todos",
    listLoadUrl: "/todos/list",
    addActionUrl: "/todos",
    addPlaceholder: "What needs to be done?",
    addButtonLabel: "Add",
    todoList: TodoListFactory.toTodoList(todos),
  });
