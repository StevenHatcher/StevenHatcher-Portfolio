import TrophyTile from './TrophyTile'
import projects from './Trophies.json'


                



export default function Trophy(){
    return(
        <section id="projects" className="border-t-1 border-solid border-stone-900 block md:px-10 text-left  md:py-12  py-3 bg-muted/20  dark:bg-muted/0">
          <h1 className="text-4xl  md:text-7xl font-bold px-4 md:px-6  md:transition-opacity duration-700 ease-in-out hover:opacity-100 md:opacity-90 font-bold tracking-wide">Creations</h1>
              <div className="grid  gap-2 grid-cols-2 2xl:grid-cols-4 md:gap-4 2xl:gap-x-2 text-left px-4 mt-2 md:mt-8">
                  {projects.map((item) => (
                    <TrophyTile
                      key={item.title}
                      title={item.title}
                      link={item.link}
                      image={item.image}
                      skills={item.skills}
                    >
                    </TrophyTile>   
                  ))}
              </div>
        </section>
    )
}