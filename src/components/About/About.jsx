import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Us
                        </h2>
                        <p className="mt-6 text-gray-600">
                         
Hello, I'm Ujjwal Saxena, a dedicated professional with a Bachelor's degree in Technology from GLA University, Mathura. My journey in the tech industry began with a rewarding experience as a Full Stack Developer at Fincrif, where I contributed my skills and knowledge for seven months. Now, I am eagerly seeking new opportunities to specialize in Front-End development, particularly utilizing the React framework and the MERN stack. My passion for creating seamless and visually appealing user interfaces, combined with my solid foundation in technology, makes me poised for success in the dynamic world of web development. I am excited about the prospect of contributing my skills to innovative projects and further enhancing my expertise in the front-end realm.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}