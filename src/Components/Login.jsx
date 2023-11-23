import React, { useState, useContext } from 'react'
import {
    Input,
    Ripple,
    initTE,
} from "tw-elements";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
const Login = () => {
    initTE({ Input, Ripple });
    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const LoginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
     

        const data = res.json()
       
        if (res.status === 400 || !data) {
            toast.error("Invalid Credentials")
        } else {
            if (email !== email || password !== password) {


                toast.error("Invalid Credentials", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                })


            }
            else {
                dispatch({ type: "USER", payload: true })
                localStorage.setItem('user',JSON.stringify({...data, password,email}))
                toast.success("Login Successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                navigate("/Dashboard")

            }

        }


    }
    return (
        <>
            <section className="h-screen">
                <div className="container h-full px-6 py-24">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
                                className="w-96 lg:block hidden  mx-auto"
                                alt="Sample image" />
                        </div>
                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <form action="" method="POST">
                                <h1 className='text-5xl flex justify-center mb-10'>Login</h1>
                                <div className="relative mb-6 mt-8" data-te-input-wrapper-init>

                                    <input
                                        type="email"
                                        className="peer block min-h-[auto] w-full rounded 0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2"
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address" />
                                    <label
                                        htmlFor="exampleHtmlformControlInput3"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                    >Email address
                                    </label>
                                </div>

                                <div className="relative mb-6 mt-8" data-te-input-wrapper-init>

                                    <input
                                        type="password"
                                        className="peer block min-h-[auto] w-full rounded 0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2"
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password" />

                                    <label
                                        htmlFor="exampleHtmlformControlInput33"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>
                                
                                <div className="mb-6 flex items-center justify-between">



                                    {/* <a href="/Reset" className='text-blue-400'>Forgot password?</a> */}
                                    <Link to="/Reset" className='text-blue-400'>Forgot password?</Link>
                          
                                </div>

                                {/* <p className='flex justify-center'>Don't have an account?<a href="/Register">Register</a></p> */}
                                <p className='flex justify-center'>Don't have an account?<Link to="/Register">Register</Link></p>

                                <button
                                    type="submit"
                                    onClick={LoginUser}
                                    className="hover:rounded-full inline-block ml-52 w-1/3  rounded bg-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    login
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login