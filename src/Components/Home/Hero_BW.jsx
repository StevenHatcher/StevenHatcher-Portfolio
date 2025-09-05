
import Hero_Links from './Hero_Links';

export default function Hero_BW() {
  return (
    <section id="hero_bw" className='pt-2 md:pt-0'>
      {/* DESKTOP */}
      
      <div className="sm:flex w-full  md:pb-7  px-2 md:px-4">
        <div className="flex flex-col items-center  flex-1">
          <h2 className=" md:mb-4  font-bold tracking-tight leading-none md:text-7xl  text-center py-2 md:py-0">
            <span className="text-2xl text-white/30 md:text-7xl md:text-white">Hi, I'm </span><br className="md:hidden"/> <span className="text-5xl  md:text-7xl">Steven Hatcher.</span>
          </h2>
          
          <p className="hidden md:block text-2xl mb-3 md:text-4xl font-medium text-muted-foreground text-center">
            Software Developer | Embedded Systems Designer
          </p>
          
          <div className="px-2 text-xl mb-3  md:hidden font-semibold mt-1 text-white/70 text-center">
            
            <p >
              Embedded Systems Designer,
            </p>

            <p>
              Software Developer.
            </p>
          </div>


          <p className="px-2 md:px-0  font-semibold  text-md md:text-2xl font-medium text-zinc-400 text-center ">
            B.Sc. Computer Science - University of Regina
          </p>
          <p className="max-w-9/10  font-semibold mb-6 text-md md:text-lg font-medium text-zinc-800 text-center ">
            Dec. 2025
          </p>

          <p className="hidden md:block max-w-2xl md:mb-6 font-semibold text-muted-foreground md:text-gray-500 lg:mb-3 my-16px md:text-lg lg:text-xl text-center md:text-left">
            Let's get to know each other
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden md:block size-6 mb-4">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>  
          <p className="md:hidden  font-bold  text-muted-foreground mb-3 center ">
            Take a look:
          </p>
          
        </div>
      </div>
      <Hero_Links  className="flex-row"/>

      <div className="flex md:hidden  justify-center gap-6 items-center"> 
            <a className="size-16" href="https://www.linkedin.com/in/steven--hatcher/" target="_blank" rel="noopener noreferrer">
              <svg className="h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#e6e6e6ff"></path> </g></svg>
            </a>

            <a className="size-11" href="https://github.com/StevenHatcher/" target="_blank" rel="noopener noreferrer">
              <svg className="h-full" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#e2e2e2ff"><title>GitHub</title><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#e2e2e2ff"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> </g> </g></svg>

            </a>

           </div>  
    </section>
  );
}