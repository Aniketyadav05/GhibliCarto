
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";



function App() {
  return (
   <Loader>
     <div className=" relative w-[100%] h-[100vh] bg-black">
      <Header />
      
      <main>
   
      <Outlet/>
      </main>
    
    </div>
   </Loader>
  );
}

export default App;
