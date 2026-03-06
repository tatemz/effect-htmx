import type { Todo } from "../../domain/Todo.ts";
import * as TodoItemFactory from "../TodoItem/TodoItem.factory.ts";
import * as TodoListModel from "./TodoList.model.ts";

/**
 * Maps a list of domain todos into a todo list view model.
 */
export const toTodoList = (
  todos: ReadonlyArray<Todo>,
): TodoListModel.TodoListModel =>
  TodoListModel.TodoListModel.make({
    items: todos.map(TodoItemFactory.toTodoItem),
  });
