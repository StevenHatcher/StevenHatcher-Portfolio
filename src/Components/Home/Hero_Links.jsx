import { Link, NavLink } from "react-router-dom";

export default function Hero_Links() {
  return (

        <div className="md:hidden flex flex-col items-center ">

                <NavLink to="/about" className="mb-6 font-bold text-4xl text-white-400 my-16px ml-6 md:ml-0 text-left tracking-wide">

                        Biography →
                </NavLink>

                <NavLink to="/portfolio" className="mb-6 font-bold text-4xl text-white-400 my-16px md:ml-0 text-left tracking-wide">
                  
                        Portfolio →
                 
                </NavLink>
        </div>


  )
}