
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import FadeInWrapper from "./components/FadeInWrapper";



function App() {
  return (
   <FadeInWrapper>
     <div className=" relative w-[100%] h-[100vh] bg-black">
      <Header />
      
      <main>
   
      <Outlet/>
      </main>
    
    </div>
   </FadeInWrapper>
  );
}

export default App;
