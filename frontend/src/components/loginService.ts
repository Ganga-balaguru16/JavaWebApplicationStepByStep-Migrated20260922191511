import axios from 'axios';

export interface LoginResponse {
  success: boolean;
  errorMessage?: string;
}

/**
 * Sends login credentials to the backend.
 * The backend endpoint `/login.do` expects `name` and `password` as form fields.
 * It returns a JSON payload `{ success: true }` on success,
 * or `{ success: false, errorMessage: "..." }` on failure.
 */
export const login = async (
  name: string,
  password: string
): Promise<LoginResponse> => {
  const formData = new URLSearchParams();
  formData.append('name', name);
  formData.append('password', password);

  const response = await axios.post<LoginResponse>('/login.do', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data;
};