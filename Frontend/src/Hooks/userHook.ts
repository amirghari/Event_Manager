// const API="https://taskmanager-server-hj26.onrender.com";

export const createUser = async (user) => {
    const response = await fetch(`${API}/api/createUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return response;
}

export const loginUser = async (user) => {
    const response = await fetch(`${API}/api/loginUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return response;
}