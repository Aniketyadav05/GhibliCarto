import { FaGithub, FaXTwitter } from "react-icons/fa6";
import {  NavLink } from "react-router-dom";

const Header = () => {
  
    return (
      <header className="text-white mx-auto font-[Menorca] font-extrabold py-2 left-0 self-center w-[70%] backdrop-blur-xl bg-white/2  border-white/20 shadow-md rounded-4xl  z-10">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="/">
          <h1 className="text-xl tracking-widest hover:text-purple-700 ">GHIBLIGO</h1>
          </a  >
          <div className="flex flex-row space-x-4">
          <NavLink  to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-700 font-bold" : "text-white" }>
          <h1 className="text-xl tracking-widest hover:text-purple-500 ">MAP</h1>
          </NavLink  >
          <NavLink  to="/Movies"
          className={({ isActive }) =>
            isActive ? "text-purple-700 font-bold text-xl" : "text-white" }>
          <h1 className="text-xl tracking-widest hover:text-purple-500 ">MOVIES</h1>
          </NavLink  >
          </div>
          <nav className="space-x-6 flex items-center  ">
            
            <a href="https://x.com/AniketYadav05_" target="_blank" className=" hover:text-purple-700"><FaXTwitter/></a>
            <a href="https://github.com/Aniketyadav05" target="_blank" className=" hover:text-purple-700"><FaGithub/></a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  