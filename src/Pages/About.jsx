import Skills from "../Components/Skills/Skills"
import Footer from "../Components/Footer"
import Experience from "../Components/About/Experience.jsx"
import { NavLink } from "react-router-dom"

export default function About(){
    return(
        <section id="AboutMe" className="mt-6">
            

            <div className="flex flex-col lg:flex-row">


                <div id="image_half" className="lg:w-5/12">
                    {/* Mobile image */}
                    <img src="../assets/images/headshot_paddington.jpg" className="overflow-hidden ml-auto mr-auto rounded-xl md:hidden w-8/10 object-cover aspect-square "></img>
                    {/* Desktop image */}
                    <img src="../assets/images/headshot_library.jpg" className="overflow-hidden hidden md:block h-full aspect-video lg:aspect-square object-cover"></img>
                </div>

                <div id="text_half" className="flex flex-col lg:w-7/12 px-8 md:px-16 xl:px-32 pt-6 lg:pt-0">
                    <div className="font-light text-left ">
                       <a href="mailto:stevenhatchersk@gmail.com" className="text-lg text-white/40 ml-1 lg:text-xl tracking-wide"> stevenhatchersk@gmail.com </a>

                        <h1 className="text-3xl md:text-5xl md:mt-6 2xl:text-7xl font-bold tracking-wider">Steven Hatcher</h1>
                        


                        <div id="DesktopText" className="hidden md:block grow pr-12">
                            
                            <p className="text-md xl:text-xl pt-4 md:pt-8 lg:tracking-wide lg:leading-7">
                                
                                A man with an insatiable desire for learning; He will forever be on the pursuit of knowledge and invention. 
                                No matter how busy life is, he always make time to to work on my own passion projects. 
                                
                            </p>
                            <p className="text-md xl:text-lg pt-2 md:pt-8 md:tracking-wide lg:tracking-wide lg:leading-7">Steven's career began in Regina, Sk., where he will be awarded my Bachelor's of Science in Computer Science from the University of Regina in December of 2025.
                                Topics of interest during his undergraduate studies include Software Engineering, Data structures, Algorithm analysis, Hardware design, Artificial intelligence, and Functional Software Requirements. 
                                During his studies, he participated in the university's first hackathon, URHacks 2025 - for which the UofR Office of Sustainability personally honoured him with the accolade of a Student Sustainability Profile,
                                recognizing his contributions and efforts in reflecting their overarching goals.
                            <br/><br/>
                                His affinity for technology was notable through childhood, and has continued to be kindled through his youth and today. 
                                He showed an early keenness for hardware and circuitry during his childhood, where he'd frequently disassemble household electronics to modify & upgrade internally.
                                This spark of interest was fueled further when Steven entered highschool, and took his first Computer Science course, and was taught coding in an academic setting for the first time.
                                

                            <br/><br/>

                            Nearing the end of his undergraduate studies, Steven found an immediate and burning passion in designing Embedded Systems. He believes there is a certain joy to be found in using code to affect something tangible. 
                                Beginning humbly with Arduino and ESP-32 microcontrollers, the winds of documentation quickly set upon the sails of his curiosity. After proudly building, wiring, and coding
                                various projects, now respectfully primitive by the standard of his current affairs, he is intent on developing a professional career in this field.
                                For a recent project, he designed, built, and coded a network of embedded systems, integrating an intermediary controller to facilitate full-duplex serial communication between the user’s personal computer and a scalable number of self-made peripheral devices.
                                
                               
                           
                            </p>
                            <p className="text-md xl:text-xl pt-2 md:pt-8 md:tracking-wide lg:tracking-wide lg:leading-7 hidden xl:block">
                                Currently, he is working on coding projects in a variety of frameworks and languages while he proudly wraps up his undergraduate studies. 

                            </p>

                            
                        </div>

                        <div id="MobileText" className="text-left w-full md:hidden ">
                            
                            <p className="text-sm">
                                A man with an insatiable desire for learning. He will forever be on the pursuit of knowledge and invention. 
                                No matter how busy life is, he always make time to to work on my own passion projects. 
                                
                            </p>
                        </div>
                        
                        <div id="links" className="mt-6 text-left self-end">
                                <h3 className="text-xl font-bold">Links:</h3>
                                <p className="text-lg text-white/80 ml-1">GitHub: <a href="https://github.com/StevenHatcher" className="text-white" target="_blank" rel="noopener noreferrer">StevenHatcher</a>     </p>
                                <p className="text-lg text-white/80 ml-1">Thingiverse: <a href="https://www.thingiverse.com/steven_hatcher" className="text-white" target="_blank" rel="noopener noreferrer">Steven_Hatcher</a>     </p>
                                <p className="text-lg text-white/80 ml-1">LinkedIn: <a href="https://www.linkedin.com/in/steven--hatcher/" className="text-white" target="_blank" rel="noopener noreferrer">Steven Hatcher</a>     </p>
                                
                            </div>
                    </div>
                </div>
                
            </div>   
                
             
           

            <section id="Experience" className="mt-12">
                 <div id="ceiling_text" className="">
                    <img src="./assets/images/ceiling.jpg" alt="" className="w-full h-1/6 absolute object-center object-cover blur-[.09em]  grayscale contrast-110 opacity-7 border-t-6 border-b-6 border-white/30"/>
                    <h1 className="relative pt-16 text-white/80 font-bold text-6xl md:text-8xl  tracking-wider  text-center drop-shadow-lg    drop-shadow-black/90  ">Experience</h1>
                </div>
                
                <div id="experience_body" className=" py-12 md:py-24 ml-auto mr-auto w-full md:w-3/4 lg:w-6/10">
                    <Experience/>
                </div>
              
                
                
                
            </section>

            <section id="skill_section" className="mb-6">
                {/* <div id="ceiling_text" className="h-full">
                    <img src="./assets/images/ceiling.jpg" alt="" className="w-full h-2/5 absolute object-bottom object-cover blur-[.09em]  grayscale contrast-10 brightness-150 opacity-2"/>
                    
                </div> */}
                <Skills />
                
            </section>
            <div className="text-right px-4">
                <NavLink to="/portfolio" className="text-3xl  md:text-7xl font-bold px-6 py-2 md:px-6 mt-12 bg-blue-500/5  rounded-md md:bg-none md:bg-black/0 md:rounded-none md:transition-opacity duration-700 ease-in-out hover:opacity-100 md:opacity-75 font-semibold ">See what I make →</NavLink>
            </div>
            <Footer/>
    </section>
)


}