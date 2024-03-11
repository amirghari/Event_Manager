
const API: string = "http://localhost:3000";
export const getEvents = async (event: Event): Promise<Response> => {
    const response = await fetch(`${API}/api/getAllEvents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    return response;
  };

