import { useState } from 'react';
import PortfolioDropdown from '../Components/Portfolio/PortfolioDropdown.jsx';
import Portfolio_Grid from '../Components/Portfolio/Portfolio_Grid.jsx';
import Footer from '../Components/Footer.jsx';

export default function Portfolio() {
  const [currentTag, setCurrentTag] = useState("All");

  return (
    <section>
     
        <div className='px-2 md:px-12'>
          <h2 className="mt-12 mb-6 md:mt-24 md:mb-12 text-4xl  font-bold md:text-8xl text-center">
            Creations
          </h2>
          <p className="text-lg mb-6 md:mb-18 md:text-2xl font-light text-muted-foreground text-center">
            I write code.  I build things. I  write code that makes the stuff I build do things.
          </p>

     

           <div className="hidden md:flex justify-center md:gap-24 gap-8 p-4 text-3xl font-semibold lg:text-4xl  ">
            <button className={currentTag === "All" ? 'text-stone-100 ' : 'text-stone-600 hover:text-stone-500 cursor-pointer'} onClick={() => setCurrentTag("All")}>All</button>
            <button href="#" className={currentTag === "Projects" ? 'text-stone-100' : 'text-stone-600 hover:text-stone-500 cursor-pointer'} onClick={() => setCurrentTag("Projects")}>Projects</button>
            {/* <button href="#" className={currentTag === "Models" ? 'text-stone-100' : 'text-stone-600 hover:text-stone-500 cursor-pointer'} onClick={() => setCurrentTag("3D Models")}>3D Models</button> */}
            <button href="#" className={currentTag === "Articles" ? 'text-stone-100' : 'text-stone-600 hover:text-stone-500 cursor-pointer'} onClick={() => setCurrentTag("Articles")}>Articles</button>
          </div>

          <PortfolioDropdown  currentTag={currentTag} onTagChange={setCurrentTag} />

          <Portfolio_Grid tag={currentTag} />


          
        </div>
      <Footer/>
    </section>
  );
}
