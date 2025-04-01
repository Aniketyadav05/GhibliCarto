import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  
    return (
      <header className="text-white mx-auto font-[Menorca] font-extrabold  top-0 left-0 self-center w-[70%] backdrop-blur-lg bg-white/5  border-white/20 shadow-md rounded-4xl  z-10">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="/">
          <h1 className="text-xl tracking-widest hover:text-purple-700 ">GHIBLICARTO</h1>
          </a  >
          <nav className="space-x-6 flex items-center  ">
            
            <a href="https://x.com/AniketYadav05_" target="_blank" className=" hover:text-purple-700"><FaXTwitter/></a>
            <a href="https://github.com/Aniketyadav05" target="_blank" className=" hover:text-purple-700"><FaGithub/></a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  