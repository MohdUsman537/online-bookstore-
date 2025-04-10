import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRoute = () => {
  const token = localStorage.getItem('token')

  // if token not found, return to admin page.
  if(!token)
  {
    return <Navigate to="/admin"/>
  }
  return children ? children : <OutLet/>
}

export default AdminRoute
