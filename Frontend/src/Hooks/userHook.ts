// const API="https://taskmanager-server-hj26.onrender.com";

// Assuming API is defined
const API: string = "http://localhost:3000"; // Example base URL, adjust as needed

interface User {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export const createUser = async (user: User): Promise<Response> => {
  const response = await fetch(`${API}/api/createUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response;
};

export const loginUser = async (user: Pick<User, 'username' | 'password'>): Promise<Response> => {
  const response = await fetch(`${API}/api/loginUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response;
};

