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
                         
                        Hello, I'm Ujjwal Saxena, a dedicated professional with a Bachelor's degree in Technology from GLA University, Mathura. I am currently working at IHMCL (Indian Highways Management Company Limited) as an Engineer, where I focus on electronic toll collection systems, FASTag data analysis, and product enhancement initiatives. With a strong foundation in technology and a passion for bridging technical expertise with business strategy, I am now seeking opportunities to specialize in Product Management, delivering user-centric and impactful solutions. I am excited to contribute my skills to innovative projects and further strengthen my expertise in product development and management..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}