import axios from 'axios';

export interface Todo {
  name: string;
  category: string;
}

export interface TodoListResponse {
  name: string;
  todos: Todo[];
  errorMessage?: string;
}

/**
 * Fetches the current user's name and todo list.
 * Expected endpoint: /list-todos.do (returns JSON matching TodoListResponse)
 */
export const fetchTodoList = async (): Promise<TodoListResponse> => {
  const response = await axios.get<TodoListResponse>('/list-todos.do');
  return response.data;
};

/**
 * Deletes a todo item.
 * Expected endpoint: /delete-todo.do?todo={name}&category={category}
 * Performs a GET request to keep compatibility with the legacy link.
 */
export const deleteTodo = async (name: string, category: string): Promise<void> => {
  await axios.get('/delete-todo.do', {
    params: {
      todo: name,
      category: category,
    },
  });
};