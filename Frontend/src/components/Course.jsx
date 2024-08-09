import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {link} from "react-router-dom";

function Course() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
                    <p className="mt-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio nam perspiciatis explicabo ducimus adipisci dolores, doloremque maxime optio amet, libero quas quasi debitis assumenda nobis animi fuga hic quis! Tenetur possimus facere itaque, neque inventore eos nisi dolorem doloribus, saepe quisquam facilis quibusdam quo qui quidem quae asperiores autem?
                    </p>
                    <link to="/">
                        <button className="bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover-bg-pink-700 duration-300">Back</button>
                    </link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        list.map((item) => {
                            <Cards key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        </>

    );
}

export default Course;
