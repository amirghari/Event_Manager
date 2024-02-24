

const API_URL = "http://localhost:5001";


export const register = async (name: string, email: string, password: string, confirmPassword: string) => {
    try {
        const response = await fetch(`${API_URL}/api/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, confirmPassword }),
        });
        if (!response.ok) {
            throw new Error("Registration failed");
        }
        return response.json();
    } catch (error) {
        throw error;
    }
};


export const login = async (email: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error("Login failed");
        }
        return response.json();
    } catch (error) {
        throw error;
    }
};

