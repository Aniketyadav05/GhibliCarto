import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  
    return (
      <header className=" font-[Alaska] top-0 left-0 self-center w-[70%] backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md rounded-4xl mt-4 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="/">
          <h1 className="text-xl tracking-widest ">GHIBLICARTO</h1>
          </a  >
          <nav className="space-x-6 flex items-center  ">
            
            <a href="https://x.com/AniketYadav05_" target="_blank" className=" hover:text-amber-400"><FaXTwitter/></a>
            <a href="https://github.com/Aniketyadav05" target="_blank" className=" hover:text-amber-400"><FaGithub/></a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  