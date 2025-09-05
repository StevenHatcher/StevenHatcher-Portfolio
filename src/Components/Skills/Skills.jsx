import SkillTile from "./SkillTile"
import SkillTiles from "./SkillTiles.json"





export default function Skills(){
    return(

        
        <section id="skills" className="border-solid border-stone-900 font-bold  ">
            <h1 className="text-4xl text-left px-4 md:px-16 md:text-7xl font-bold  mb-4 md:mb-12 md:transition-opacity duration-700 ease-in-out hover:opacity-100 md:opacity-90 font-bold md:tracking-wider">Skills</h1>

                <div className="grid md:grid-cols-2 2xl:grid-cols-4 md:gap-4 2xl:gap-x-4 text-left items-start md:px-8 xl:px-16 2xl:px-34">
                

                {SkillTiles.map((item, idx) => (
                    <SkillTile
                   
                    key={item.title || idx}
                    title={item.title}
                    description={item.description}
                    skills={item.skills}
                    
                    />
                ))}

                </div>


        </section>

)}