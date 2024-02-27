import { useEffect, useState } from "react"
import apiClient from "../Services/api-client"
import { CanceledError } from "axios"

export interface Events {
    Id: number
    Title: string
    Description: string
    Organizer: string
    Date: string
    Time: string
    Location: string
    Image: string
}
const useEvents = () => {
    const [events, setEvents] = useState([])
    const [error, setError] = useState()
    const[isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    apiClient
      .get('/events', { signal: controller.signal})
      .then((res) => {
        setEvents(res.data)
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      });
  
      return () => controller.abort();
    }, [])
      return { events, error, isLoading }
  }
  
  export default useEvents