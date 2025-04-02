
import { Outlet } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <div className=" relative w-[100%] h-[100vh] bg-black">
      <Header />
      <main>
      <Outlet/>
      </main>
    
    </div>
  );
}

export default App;
