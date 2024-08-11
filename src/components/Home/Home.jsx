import React from "react";
import {Link , NavLink} from 'react-router-dom'
import Project from "../Project";
import Resume from "../Resume";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl ">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hi I am Ujjwal Saxena
                            <br />
                            <br />
                            <span className="hidden sm:block font-sans  text-sm">Passionate web developer with expertise in crafting intricate Frontend and Backend solutions, including extensive experience in Java Spring Boot for robust backend development. Skilled in building scalable, user-friendly, and enterprise-level applications. Elevating digital experiences through innovative and seamless website development. Let's bring your vision to life.</span>
                        </h2>
<br />
                        <Link
                     
                            to="https://api.whatsapp.com/send?phone=9319699891"
                        >
                         <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Whatsapp Now 
</span>
</button>
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full  ">
                    <img className="w-96" src="..\Ujjwal_Image.png" alt="image1" />
                </div>
            </aside>
/
            <h2 className="text-4xl text-center font-bold sm:text-5xl">Projects</h2>
            <br />



            <div className="flex flex-wrap gap-6" id="project">
                <div  >
<Project  name = "FilmForia" 
 description = "Tech Stack : React , Spring Boot , Spring Security , MySql , Spring Jpa   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Implemented JWT Authentication through which user can register than login And without register user can not have access to view film blogs   . User can read the blogs of films can update , delete film blogs and admin can add the film blogs  Through Rest Api
" 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MTfsyWPf2Twd816k39toiFEeJfUtym3yEQ&s" 
projectLink = "https://github.com/ujjwal9019/Movie-Booking-System-" 
githublink = "https://github.com/ujjwal9019/React-Major-Project/tree/main/blogs" />

</div>

<div>
      <Project  name = "Crypto Currency" 
       description = "Tech Stack : React , Tailwind , Vercel  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  Immerse yourself in the dynamic world of cryptocurrencies with CryptoCurrency Live Tracker. Witness live price updates
and stay informed about the latest market movements of top cryptocurrencies, empowering you to make informed
decisions in real-time" 
image="/crypto.jpg"
 projectLink = "https://crypto-currency-iota-peach.vercel.app/"
  githublink = "https://github.com/ujjwal9019/React-Major-Project/tree/main/blogs" />
 
      </div>  

      <div>
      <Project  name = "Fincrif" 
       description = "Tech Stack : HTML , CSS , JavaScript , AJAX ,php, Laravel ,  Bootstrap .  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  It is a Personal Loan Website That is a a responsive, user-friendly website catering to thousands daily. Streamlined application, tailored loan solutions, and transparent terms redefine the personal loan experience, ensuring financial accessibility for all   " 
       image="/fincrif-logo.png"
        projectLink = "https://fincrif.com/" 
        githublink = "https://github.com/ujjwal9019/React-Major-Project/tree/main/blogs" />
      </div>
      <div>


      <Project  name = "Online Comapany" 
       description = "this isContributed to a comprehensive business services platform—offering expertise in GST registration, company incorporation, labor compliance, licenses, and registrations. Streamlining processes for clients to navigate regulatory landscapes effortlessly" 
       image="/online-company.jpeg" 
       projectLink = "https://onlinecompany.co.in/"
       githublink = "https://github.com/ujjwal9019/React-Major-Project/tree/main/blogs" />
      
      
      </div>


      <div>
      <Project  name = "HackerRank Automation"
       description = "Tech Stack : Node js, Puppeteer  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  Automate HackerRank tasks: Script automates tasks from login to solving algorithms.
 Opens Chromium browser: Launches browser, logs in with credentials.
 Solves Algorithm Questions: Navigates to algorithm section, solves a chosen question.
 Passes Test Cases: Validates solution, closes browser upon completion.
" 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvD2K-n2_MISCt9k-FBulpy1d99dk3fFwDRQ&s"
 projectLink = "https://www.youtube.com/watch?v=DkSJhTD8Fjc"
  githublink = "https://github.com/ujjwal9019/React-Major-Project/tree/main/blogs" />
 
      </div>  

         
      </div>






      <br />
      <br />
      <br />




      <h2 className="text-4xl text-center font-bold sm:text-5xl">Resume</h2>
      <br />
      
      <Resume/>






           
        </div>







    );
}
