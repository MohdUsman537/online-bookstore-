import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";



const Login = () => {
    const [message,setMessage]=useState("message")
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")
    // const [isLogin, setIsLogin] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState(false)
    // const [success, setSuccess] = useState(false)
    // const [user, setUser] = useState(null)
    // const [token, setToken] = useState(null)

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold mb-4">Please login</h2>

            <form action="">
                <div className="mb-4">
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="email address" className="shadow apperance-none border rounded w-full py-2 px-3leading-tight focus:outline-none focus:shadow" />
                </div>
                <div className="mb-4">
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="password" className="shadow apperance-none border rounded w-full py-2 px-3leading-tight focus:outline-none focus:shadow" />
                </div>
                {
                    message &&<p className="text-red-500 text-xs italic" >Please enter valid email and password</p>
                }
                <div className="">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">Login</button>
                </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Haven't an acount? please <Link to="/register" className="text-blue-500 hover:text-blue">register</Link></p>
            {/*google signin*/}
            <div className="mt-4">
                <button>
                    <FaGoogle className="w-full flex flex-wrap gap-1 item-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outlibe-none"/>
                    <span>Sign in with Google</span>
                </button>
            </div>
            <p></p>
        </div>
    </div>
  )
}

export default Login