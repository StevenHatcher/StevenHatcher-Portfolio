

export default function TrophyTile({title, image, link, skills}){
    return(
       
            <a href={link} className="group aspect-square relative flex overflow-hidden rounded-md md:ml-0 md:mr-0 shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" target="_blank" rel="noopener noreferrer">
                                <img src={image}  alt="Project" className="absolute inset-0 rounded-md md:rounded-none object-cover content-center transition-transform duration-500 ease-in-out group-hover:scale-110"></img>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white p-1 md:p-6 flex flex-col md:opacity-40 align-end justify-end md:transition-opacity duration-700 ease-in-out group-hover:opacity-90">

                                        <h3 className="text-sm  md:text-2xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] md:opacity-50 md:transition-opacity duration-700 ease-in-out group-hover:opacity-100"> {title} </h3>

                                        {skills.map((item) => (
                                            <h4 key={item} className="xl:text-md lg:text-sm text-white font-semibold hidden md:block md:opacity-40 md:transition-opacity duration-700 ease-in-out group-hover:opacity-90"> {item} </h4>
                                        ))}
                                        
                                </div>
                
                            
            </a>
    

    )
}