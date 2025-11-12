import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatinNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative z-20 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 py-2 w-full">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav navItems={
          [
            { name: "Home", link: "#", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaHome /> },
            { name: "Projects", link: "#projects", icon: <FaHome /> },
            { name: "Contact", link: "#contact", icon: <FaHome /> }
          ]
        }
        />
        <Hero />
        <Grid/>  
      </div>
    </main>
  );
}
