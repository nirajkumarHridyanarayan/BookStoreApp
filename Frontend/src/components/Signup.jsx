import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className="flex h-screen items-center justify-center ">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">SignUp</h3>
                            {/* Name */}
                            <div className="mt-4 space-y-2">
                                <span>Full Name: </span><br />
                                <input type="text" name="" placeholder="Enter your Full-Name" className="w-80 px-3  py-1 rounded-md outline-none" {...register("name", { required: true })} /><br />
                                {errors.name && (<span className="text-sm text-red-500">This field is required</span>)}
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <span>Email</span><br />
                                <input type="email" name="" placeholder="Enter your email" className="w-80 px-3  py-1 rounded-md outline-none" {...register("email", { required: true })} /><br />
                                {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <span>Password</span><br />
                                <input type="text" name="" placeholder="Enter your password" className="w-80 px-3  py-1 rounded-md outline-none" {...register("password", { required: true })} /><br />
                                {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
                            </div>
                            {/* button */}
                            <div className="flex justify-around mt-d">
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SignUp</button>
                                <p className="text-xl">Have Account?{""} <button className="underline text-blue cursor-pointer" onClick={() => document.getElementById("my_model_3").showModal}>LogIn</button>{" "}<Login /></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup
