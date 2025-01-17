import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
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
                            <h3 className="font-bold text-lg">Contact Us</h3>
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
                            {/* Message */}
                            <div className="mt-4 space-y-2">
                                <span>Message</span><br />
                                <textarea
                                    placeholder="Type your message"
                                    className="textarea textarea-bordered textarea-md w-80 px-3  py-1 rounded-md outline-none" {...register("password", { required: true })}></textarea><br />
                                {errors.message && (<span className="text-sm text-red-500">This field is required</span>)}
                            </div>
                            {/* button */}
                            <div className="flex justify-around mt-d">
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
