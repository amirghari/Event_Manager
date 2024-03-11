// src/hooks/useEventApi.ts or a similar service file
import { EventParams } from "../Components/EventApp/AsideBar";
const API: string = "http://localhost:3000";

export const useEventApi = () => {
  const createEvent = async (eventParams: EventParams) => {
    try {
      const response = await fetch(`${API}/api/createEvent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventParams),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    }
  };

  return {
    createEvent,
  };
};
