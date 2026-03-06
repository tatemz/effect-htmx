import type { Todo } from "../../domain/Todo.ts";
import * as TodoItemModel from "./TodoItem.model.ts";

/**
 * Maps a domain todo entity into a todo item view model.
 */
export const toTodoItem = (todo: Todo): TodoItemModel.TodoItemModel =>
  TodoItemModel.TodoItemModel.make({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    doneUrl: `/todos/${todo.id}/done`,
    undoUrl: `/todos/${todo.id}/undo`,
    deleteUrl: `/todos/${todo.id}/delete`,
    targetId: `todo-${todo.id}`,
    titleClass: todo.completed ? "line-through opacity-50" : "",
  });
