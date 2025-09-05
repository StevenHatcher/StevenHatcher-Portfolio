import {NavLink} from "react-router-dom";

export default function MeAndPort(){
    return(
        <section id="MeAndPort" className="mx-auto hidden md:block md:mb-6 bg-muted/20 dark:bg-muted/10">

            <div className="grid grid-cols-2  gap-6">

                <NavLink to="/portfolio" className="mb-3 aspect-video md:mb-0 group rounded-r-sm relative  overflow-hidden shadow-lg">
                    <img src="./assets/images/sculpture.jpg"  alt="" className=" absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 pb-2 flex flex-col justify-end items-end ">
                            <div className="md:transition-opacity duration-700 ease-in-out group-hover:opacity-70 md:flex text-2xl lg:text-[6em] font-bold text-primary-foreground dark:text-white opacity-9 tracking-extrawide "> Portfolio
           
                        </div>
                    </div>
                </NavLink>



                <NavLink to="/about" href="#" className="group relative rounded-l-sm aspect-video  aspect-auto overflow-hidden shadow-lg">
                    <img src="./assets/images/headshot_painting.jpg"  alt="" className=" saturate-80 absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 pb-2 flex flex-col justify-end items-start ">
                            <div className="md:transition-opacity duration-700 ease-in-out group-hover:opacity-70 md:flex text-2xl lg:text-[6em] font-bold text-primary-foreground dark:text-white opacity-9 tracking-extrawide "> Biography
                            
                        </div>
                    </div>
                </NavLink>
            </div>
        </section>
    )
}