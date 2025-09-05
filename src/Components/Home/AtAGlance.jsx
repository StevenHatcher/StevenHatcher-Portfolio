import { Link, NavLink } from "react-router-dom";

export default function AtAGlance(){
    return(
        <div className="grid grid-cols-1 xl:grid-cols-4 px-6 md:px-10 pt-16  md:pl-28 md:pr-32 w-full  md:text-left content-center  gap-18 mb-12 md:mb-24">
              
              <div className='md:col-span-2 pt-4 border-t-1 md:border-t-3 px-1  border-solid border-stone-900'>
                <h2 className="text-3xl  font-semibold mb-3 md:mb-6 lg:text-5xl">At a glance</h2>
                <p className='text-md lg:text-xl font-thin tracking-wider md:pr-8 xl:leading-9'>
                  A technological architect with an appreciation for the finer things in life; Steven Hatcher achieves results by utilizing his diverse skillset to leverage a combination of hardware and software. 
                  His proven experience in Software Development, Embedded Systems Design, Hardware Architecture, and Circuit Design overlap cleverly, 
                   allowing him to create hardware results you can hold, operated by software you can trust.
                </p>
                <p className='text-lg lg:text-xl  items-end mt-6 md:pr-8 '>Reach out at <a href="mailto:stevenhatchersk@gmail.com" className=" font-semibold text-white/90 "> stevenhatchersk@gmail.com </a></p>
              </div>

              

              <div className='hidden md:block md:col-span-1  pt-2 border-t-4 border-solid border-stone-900'>
                <h2 className='text-2xl text-white/80 font-bold md:mb-3 md:mt-3 md:text-3xl lg:tracking-wide'>Direction</h2>
                  <p className='lg:text-lg  mb-3 pr-7'>
                    Steven's lifelong mission is to simultaneously develop new skills while providing his established skillset to contribute to something greater.
                  </p>

              </div>


              <div className='hidden md:block md:col-span-1 mt-1'>
                <div className='grid grid-rows-3'>
                  
                  <a href="https://github.com/StevenHatcher/" className=' pt-3 mb-6 border-t-3 border-solid border-stone-900' target="_blank" rel="noopener noreferrer">
                  <h2 className='font-bold ml-4 text-white/50 md:text-xl'>GitHub</h2>
                  <p className='lg:text-lg ml-4 '>Take a look behind the scenes.</p>
                </a>

                <a href="https://www.linkedin.com/in/steven--hatcher/" className='pt-3 mb-6 border-t-3 border-solid border-stone-900' target="_blank" rel="noopener noreferrer">
                  <h2 className='font-bold ml-4 text-white/50 md:text-xl'>LinkedIn</h2>
                  <p className='text-lg ml-4 '>Contact and connect.</p>
                </a>

  

                <NavLink to="/about" className='pt-3 mb-6 border-t-3 border-solid border-stone-900'>
                  <h2 className='font-semibold mr-6  text-right md:text-xl'>Learn more →</h2>
             
                </NavLink>
              </div>
              </div>

              
            </div>


    )
}