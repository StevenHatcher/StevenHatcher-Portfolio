import Hero_BW from '../Components/Home/Hero_BW.jsx'
import Trophy from '../Components/Home/Trophy/Trophy.jsx'
import Skills from '../Components/Skills/Skills.jsx'
import MeAndPort from '../Components/Home/MeAndPort.jsx'

import Footer from '../Components/Footer.jsx'
import AtAGlance from '../Components/Home/AtAGlance.jsx'
import { NavLink } from 'react-router-dom'


export default function HomePage() {
  
  return (
    <section className='md:mt-24 '>
        {/* <NavBar /> */}
        <img src="../assets/images/headshot_oxford.jpg" className="overflow-hidden ml-auto mr-auto rounded-xl md:hidden w-7/10 object-cover aspect-square "></img>
        <Hero_BW />

        
        <div id="homepage" className="max-w-full ">
        
            <MeAndPort />

            <AtAGlance />

          <div className='text-right md:mt-16  '>
              <Trophy  />
              <NavLink to="/portfolio" className="text-2xl md:mr-24 md:text-5xl  font-bold px-6 md:px-0 md:transition-opacity duration-700 ease-in-out hover:opacity-100 md:opacity-60 font-semibold tracking-wider">See more →</NavLink>
          </div>
            <div className='text-right mt-16'>
              <Skills />
              <NavLink to="/about" className="text-3xl md:mr-24 md:text-7xl font-bold  px-6 md:px-0 md:transition-opacity duration-700 ease-in-out  hover:opacity-100 md:opacity-60 font-bold tracking-wider">Experience →</NavLink>
              
              
            </div>
            
        </div>

       

        <Footer/>
    </section>
  );
}
