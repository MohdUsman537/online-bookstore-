import React, { useState } from 'react'
import { useForm } from "react-hook-form"


const AdminLogin = () => {
  const [message, setMessage] = useState("")
  const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
        try {
            // navigate("/")
        } catch (error) {
            SetMessage("Please provide valid email and password")
            console.error(error)
        }
      }
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Admin Dashboard</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Username</label>
                <input 
                {...register("username", { required: true })} 
                type="text" name="username" id="username" placeholder='username'
                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                <input 
                {...register("password", { required: true })} 
                type="password" name="password" id="password" placeholder='Password'
                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                />
            </div>
            {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
            <div>
                <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Login </button>
            </div>
        </form>
    
        <p className="mt-5 text-center text-gray-500 text-xs">
            @2025 BookStore. All rights reserved
        </p>
    
    </div>
</div>
  )
}

export default AdminLogin
