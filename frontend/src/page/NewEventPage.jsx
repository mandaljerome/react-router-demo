import React from 'react'
import EventForm from '../components/EventForm'
import { redirect, json } from 'react-router-dom'

const NewEventPage = () => {
   return (
      <div>
         <EventForm />
      </div>
   )
}

export default NewEventPage

export const addEventAction = async ({ request, params }) => {
   const data = await request.formData()

   const newEvent = {
      title: data.get('title'),
      date: data.get('date'),
      image: data.get('image'),
      description: data.get('description'),
   }

   const response = await fetch('http://localhost:8080/events', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
   })

   if (response.status === 422) {
      return response
   }

   if (!response.ok) {
      throw json({ message: 'Cant submit the data' }, { status: 500 })
   } else {
      return redirect('/events')
   }
}
