import experiences from './experience.json'


export default function Experience(){
    return(
        <section id="experience_section" className="">
            
            {experiences.map((item) => (
                
                <div key={item.title} className="flex flex-col py-4 md:py-12 px-4 md:px-0 border-t-1 border-white/5">
                    
                

                    <h1 className="text-xl md:text-4xl font-bold mb-1">{item.title}</h1>
                    
                    <div className="flex flex-row justify-between items-center mb-3 ">
                       
                            <h2 className="text-lg md:text-2xl text-white/50">{item.employer}</h2>
                       
                            <h2 className="text-sm md:text-xl text-white/40">{item.location}</h2>
                       
                    </div>

                    <div className="flex flex-row justify-between pt-1 2xl:px-18">
                            <ul className=" font-light text-white/80 ">
                                {item.responsibilities.map((responsibility) => (
                                    
                                    <li key={responsibility} className="mb-3 text-md leading-[1.4] xl:text-xl">• {responsibility}</li>
                                ))}
                            </ul>
                            
                            {/* <ul className="text-xl text-right">
                                <h3 className="">Tools</h3>
                                {item.skills.map((skill) => (
                                    <li>{skill}</li>
                                ))}
                            </ul> */}
                    </div>

                </div>

            ))}
      
        </section>
    )

}


