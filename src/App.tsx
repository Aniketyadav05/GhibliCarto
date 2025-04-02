
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import ShinyText from "./components/ShinyText";



function App() {
  const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
      // Check if the device is mobile
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 750); // Adjust breakpoint if needed
      };
  
      checkMobile();
      window.addEventListener("resize", checkMobile);
  
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);
    if (isMobile) {
      return (
        <div className='flex flex-col gap-10 items-center justify-center min-h-screen bg-black text-white text-center p-4'>
          
          <ShinyText text="GHIBLI GO" disabled={false} speed={4} className="text-lg font-bold tracking-wide text-[rgba(106,111,113,255)] rock-salt mb-6 font-[Perished]"/>
          <p className="text- font-[Menorca]">This website is not ready for mobile devices yet. Please Try to access it with a Desktop</p>
        
        </div>
      );
    }
  return (
   <Loader>
     <div className="relative w-[100%] h-[100vh] bg-black">
      <Header />
      
      <main>
   
      <Outlet/>
      </main>
    
    </div>
   </Loader>
  );
}

export default App;
