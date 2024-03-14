
import { useState, useEffect } from 'react';
import { Events } from './useEvents';


const API: string = "http://localhost:3000"; 
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
    throw error;  
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
export const checkEventJoined = async (userName: string | null, eventId: number): Promise<boolean> => {
  if (!userName) {
    return false;
  }

  try {
    const response = await fetch(`${API}/api/${userName}/isEventJoined/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const isJoined = await response.json(); 
    return isJoined;
  } catch (error) {
    console.error('Error checking if event is joined:', error);
    return false;
  }
};


