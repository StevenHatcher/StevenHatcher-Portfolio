import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function PortfolioDropdown({ currentTag, onTagChange }) {
  return (
    <Menu as="div" className="block md:hidden relative w-10/10 ">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-sm bg-white/2 px-3 py-1 text-2xl  text-white inset-ring-1 tacking-wider  inset-ring-white/5">
         {currentTag} 
      
      </MenuButton>

      <MenuItems
        transition
        className="absolute text-center right-0 z-10 mt-1 w-full origin-top-right rounded-md bg-zinc-900 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem onClick={() => onTagChange("All")}>
            <button
            // className={currentTag === "All" ? 'hidden ' :"block  px-4 py-2 text-lg text-gray-300 data-focus:bg-neutral- data-focus:text-white data-focus:outline-hidden"} onClick={() => onTagChange("All")}>
              className="block  px-4 py-2 text-lg text-gray-300 data-focus:bg-neutral- data-focus:text-white data-focus:outline-hidden" >
                All
            </button>
          
          </MenuItem>
          <MenuItem onClick={() => onTagChange("Projects")}>
            <button
              className="block px-4 py-2 text-lg text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden" >
                
              Projects
            </button>
          </MenuItem>
          {/* <MenuItem onClick={() => onTagChange("3D Models")}>
            <button
              className="block px-4 py-2 text-lg text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden" >
                
              3D Models
            </button>
          </MenuItem> */}
          <MenuItem onClick={() => onTagChange("Articles")}>
            <button
              className="block px-4 py-2 text-lg text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden" >
                
              Articles
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}