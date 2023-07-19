import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
   const error = useRouteError()

   let title
   let message = 'Errorrrr Default'

   if (error.status === 404) {
      title = 'Invalid URL'
      message = 'Page couldnt found!'
   }

   if (error.status === 500) {
      title = 'Fetching Data Error'
      message = error.data.message
   }

   return (
      <div>
         <MainNavigation />
         <h1>{title}</h1>
         <p>{message}</p>
      </div>
   )
}

export default ErrorPage
