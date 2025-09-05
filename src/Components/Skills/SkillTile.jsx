// import SkillTileIcon from "./SkillTileIcon"

export default function SkillTile({title, description, skills}){
    return(
        <div className="group relative border-t-3 border-solid border-stone-800/70 flex flex-col items-start overflow-hidden content-start px-4 pt-2 mb-2 md:mb-8">

            <div className="text-lg md:text-2xl md:text-left font-bold  ">{title}</div>
                                


                <div className=" md:flex flex-col  md:pb-1">
                
                    <p className=" font-normal text-sm md:text-lg md:text-left  md:mb-5  "> {description} </p>
                    <ul className="">
                        {skills.map((item) => (
                                        <div className="flex flex-row text-center justify-between md:gap-12 md:px-4 mb-1 " key={item.title}>
                                            <p className="text-sm md:text-lg text-left font-semibold">{item.title}</p>
                                            <p className="text-sm md:text-lg font-thin">{item.time}</p>
                                        </div>
                                        ))}
                    </ul>
                </div>
            </div>
    )
}