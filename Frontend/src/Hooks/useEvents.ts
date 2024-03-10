import { useState, useEffect } from 'react';

export interface Events {
    Id: number;
    Title: string;
    Description: string;
    Organizer: string;
    Date: string;
    Time: string;
    Location: string;
    Image: string;
}

const API: string = "http://localhost:3000";

// This function will be used inside a component
export const useEvents = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [joinedEvents, setJoinedEvents] = useState<Events[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${API}/api/getAllEvents`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data: Event[] = await response.json();
                setEvents(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return { events, error, isLoading, joinedEvents, setJoinedEvents};
};
