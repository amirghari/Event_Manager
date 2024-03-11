// const API="https://taskmanager-server-hj26.onrender.com";
import { useState, useEffect } from 'react';
import { Events } from './useEvents';

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
export const joinEvent = async (userName: string, event: Events) => {
  try {
    const response = await fetch(`${API}/api/${userName}/addEventToUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to join event:', errorData);      
    }

    return response;
  } catch (error) {
    console.error('Error making request to join event:', error);
    // Handle or throw error appropriately
  }
};


export const useUserEvents = (userName: string) => {
  const [joinedEvents, setJoinedEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Replace 'API' with your actual API base URL
        const response = await fetch(`${API}/api/${userName}/events`, {

        });

        if (!response.ok) {
          throw new Error('Failed to fetch events.');
        }

        const data: Event[] = await response.json();
        setJoinedEvents(data);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [userName]);

  return { joinedEvents, isLoading, error };
};


  