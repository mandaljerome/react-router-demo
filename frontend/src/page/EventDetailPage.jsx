import { useRouteLoaderData, json, redirect } from 'react-router-dom'
import React from 'react'

import EventItem from '../components/EventItem'

const EventDetailPage = () => {
   // const { id } = useParams()

   const data = useRouteLoaderData('event-detail')

   return (
      <div>
         <EventItem event={data.event} />
      </div>
   )
}

export default EventDetailPage

export const eventLoader = async ({ request, params }) => {
   const eventId = params.id

   const response = await fetch('http://localhost:8080/events/' + eventId)

   if (!response.ok) {
      throw json({ message: 'Cant locate the date' }, { status: 500 })
   } else {
      return response
   }
}

export const eventDeleteAction = async ({ request, params }) => {
   const eventId = params.id

   const response = await fetch('http://localhost:8080/events/' + eventId, {
      method: request.method,
   })

   if (!response.ok) {
      throw json({ message: 'Couldnt delete the event' }, { status: 500 })
   }

   return redirect('/events')
}
