import React from 'react'
import { Link, useLoaderData, json } from 'react-router-dom'
import EventsList from '../components/EventsList'

const EventsPage = () => {
   const data = useLoaderData()
   const events = data.events

   return (
      <div>
         <EventsList events={events} />
      </div>
   )
}

export default EventsPage

export const eventLoader = async () => {
   const response = await fetch('http://localhost:8080/events')

   if (!response.ok) {
      // throw new Response(JSON.stringify({ message: 'Cant fetch data!' }), {
      //    status: 500,
      // })
      throw json({ message: 'Fetching error data' }, { status: 500 })
   } else {
      return response
   }
}
