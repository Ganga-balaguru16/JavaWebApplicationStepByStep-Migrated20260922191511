import axios from 'axios';

export interface AddTodoRequest {
  todo: string;
  category: string;
}

export const addTodo = async (data: AddTodoRequest): Promise<void> => {
  await axios.post('/add-todo.do', new URLSearchParams({
    todo: data.todo,
    category: data.category,
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
  });
};