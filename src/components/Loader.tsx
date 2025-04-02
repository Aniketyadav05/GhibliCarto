
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
interface LoaderProps {
  children: ReactNode;
}
const Loader: React.FC<LoaderProps> =({children}) => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
   
    const tl = gsap.timeline();

    tl.to(pageRef.current, {
      y: "-100vh",
      scale: 0.65,
      duration: 0,
    })
      .to(pageRef.current, {
        y: "20vh",
        duration: 1,
        delay: 1,
      })
      .to(pageRef.current, {
        y: "0vh",
        rotate: 0,
        scale: 1,
        duration: 0.8,
        delay:1
      });
  }, []);

  return <div ref={pageRef} className=''>{children}</div>;
}

export default Loader